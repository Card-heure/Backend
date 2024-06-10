import db from '@adonisjs/lucid/services/db'

export default class GetSubjects {
  static async getSubjectsByUserId(userId: number) {
    return db.from('subjects').where('creator_id', userId).select('*')
  }

  static async getSubjectsById(id: number) {
    return db.from('subjects').where('id', id).select('*')
  }
}
