import { TUpdateSubject } from '#models/types/TSubject'
import db from '@adonisjs/lucid/services/db'

export default class UpdateSubject {
  static async updateSubject(id: number, updateSubject: TUpdateSubject) {
    return db.from('subjects').where('id', id).update(updateSubject).returning('*').first()
  }
}
