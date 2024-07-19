import db from '@adonisjs/lucid/services/db'

export default class DeleteCard {
  static async deleteCard(id: number) {
    return db.from('cards').where('id', id).delete()
  }
}
