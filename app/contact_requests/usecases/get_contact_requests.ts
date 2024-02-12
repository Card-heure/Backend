import db from '@adonisjs/lucid/services/db'

export default class GetContactRequests {
  static getContactRequestsByUserId(userId: number) {
    return db.from('contact_requests').where('from_user_id', userId).select('*')
  }

  static getContactRequestsById(id: number) {
    return db.from('contact_requests').where('id', id).select('*')
  }
}
