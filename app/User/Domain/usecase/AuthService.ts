import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Users from "App/Models/Users";
import SocialToken from "App/Models/SocialToken";
import * as console from "console";


export default class AuthService {
  static async login({ally}: HttpContextContract) {
    return ally.use("google").stateless().redirect();
  }

  static async handleCallback({ally, auth, response}: HttpContextContract) {
    try {
      const google = ally.use("google").stateless();

      /**
       * User has explicitly denied the login request
       */
      if (google.accessDenied()) {
        return "Access was denied";
      }

      /**
       * Unable to verify the CSRF state
       */
      if (google.stateMisMatch()) {
        return "Request expired. try again";
      }

      /**
       * There was an unknown error during the redirect
       */
      if (google.hasError()) {
        return google.getError();
      }

      /**
       * Managing error states here
       */

      const user = await google.user();
      const {token} = user;

      const findUser = {
        email: user.email as string,
      };

      const userDetails = {
        first_name: user.name.split(" ")[0] as string,
        last_name: user.name.split(" ")[1] as string,
        email: user.email as string,
        access_token: token.token as any,
        profile_pic: user.avatarUrl as string
      };

      const newUser = await Users.firstOrCreate(findUser, userDetails);

      if (!newUser) {
        return response.json({
          status: false,
          message: "Something went wrong.",
        });
      }

      /* Save Social Token */
      let socialToken = await SocialToken.query()
        .where("user_id", newUser.id)
        .first();

      socialToken = socialToken ? socialToken : new SocialToken();
      socialToken.user_id = newUser.id;
      socialToken.token = token.token;
      socialToken.type = token.type;
      socialToken.expiresAt = token.expiresAt!!.toString();

      await socialToken.save();
      /* Save Social Token */

      // Generate API token

      const userToken = await auth.use("api").generate(newUser, {
        expiresIn: "90 mins",
      });

      response.json({ /* newUser, */ userToken /* , socialToken */});
    } catch (err) {
      console.log("erreur : " + err)
      response.json({
        status: false,
        message: "Something went wrong.",
      });
    }
  }

  static async logout({auth, response}: HttpContextContract) {
    await auth.use("api").revoke();
    return response.json({
      revoked: true,
    });
  }
}

