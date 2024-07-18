import db from '@adonisjs/lucid/services/db'

export default class DeleteUser {
  static async deleteUser(id: number) {
    return db.from('users').where('id', id).delete()
  }
}
