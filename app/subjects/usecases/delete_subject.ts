import db from '@adonisjs/lucid/services/db'

export default class DeleteSubject {
  static async deleteSubject(id: number) {
    return db.from('subjects').where('id', id).delete()
  }
}
