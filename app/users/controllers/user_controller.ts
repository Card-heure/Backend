import GetUser from '#users/usecases/get_user'

export default class UserController {
  static async getUser(id: number) {
    return GetUser.getUser(id)
  }

  getUsers() {
    return GetUser.getUser()
  }
}
