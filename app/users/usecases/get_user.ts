import db from '@adonisjs/lucid/services/db'

export default class GetUser {
  static async getUser(id?: number) {
    if (id) {
      return await db.from('users').where('id', id).first()
    } else {
      return await db.from('users').select('*')
    }
  }
}
