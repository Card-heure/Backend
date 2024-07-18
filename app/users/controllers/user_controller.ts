import GetUser from '#users/usecases/get_user'
import DeleteUser from '#users/usecases/delete_user'

export default class UserController {
  static async getUser(id: number) {
    return GetUser.getUser(id)
  }

  static getUsers() {
    return GetUser.getUser()
  }

  static deleteUser(id: number) {
    return DeleteUser.deleteUser(id)
  }
}
