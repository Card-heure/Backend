import db from '@adonisjs/lucid/services/db'

export default class GetContacts {
  static getContactsByUserId(userId: number) {
    return db.from('contacts').where('from_user_id', userId).select('*')
  }

  static getContactsById(id: number) {
    return db.from('contacts').where('id', id).select('*')
  }
}
