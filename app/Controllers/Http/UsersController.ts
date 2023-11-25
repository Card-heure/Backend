import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import UserService from "App/User/Domain/usecase/UserService";
import {superAdmin} from "App/Models/Users";

export default class UsersController {
  static async getAll({response, auth}: HttpContextContract) {
    try {
      const user = auth.user;
      if (!user?.id || !superAdmin(user)) {
        response.status(401);
        return;
      }
      const userList = await UserService.getAll()
      return response.json({
        data: userList,
      });
    } catch (err) {
      return response.json({
        status: false,
        message: "Something went wrong.",
      });
    }
  }
}
