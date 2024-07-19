import db from '@adonisjs/lucid/services/db'

export default class GetCard {
  static async getCardsByUserId(userId: number) {
    return db.from('cards').where('creator_id', userId).select('*')
  }

  static async getCardsById(id: number) {
    return db.from('cards').where('id', id).select('*').first()
  }
  static async getCardsBySubjectId(subjectId: number) {
    return db.from('cards').where('subject_id', subjectId).select('*')
  }
}
