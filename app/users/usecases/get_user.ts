import db from '@adonisjs/lucid/services/db'

export default class GetUser {
  static getUser(id?: number) {
    if (id) {
      return db.from('users').where('id', id).first()
    } else {
      return db.from('users').select('*')
    }
  }
}
