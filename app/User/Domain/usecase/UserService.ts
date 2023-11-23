import Users from "App/Models/Users";
import {List} from "Contracts/utils";
import {User} from "App/json/type/TUser";

export default class UserService {
  static async getAll() {
    const profile = await Users.query();
    let userList: List<User>;
    userList = new List<User>();
    profile.forEach((data) => {
        userList.add({
          id: data.id,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          profile_pic: data.profile_pic
        })
      }
    )
    return userList
  }
}