import GetUser from '#users/usecases/get_user'
import DeleteUser from '#users/usecases/delete_user'
import UpdateUser from '#users/usecases/update_user'
import { TUpdateUser } from '#models/types/TUser'

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
  static updateUser(id: number, request: Request) {
    const dataRequest = request.body() as TUpdateUser
    const updateUser: TUpdateUser = {
      full_name: dataRequest.full_name,
      first_name: dataRequest.first_name,
      last_name: dataRequest.last_name,
      email: dataRequest.email,
      birth_date: dataRequest.birth_date,
      gender: dataRequest.gender,
    }
    return UpdateUser.updateUser(id, updateUser)
  }
}
