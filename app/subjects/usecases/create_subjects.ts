import db from '@adonisjs/lucid/services/db'
import { TCreateSubject } from '#models/types/TSubject'

export default class CreateSubjects {
  static async createSubject(createSubject: TCreateSubject) {
    const subjectReturn = db.table('subjects').returning('*').insert(createSubject)
    return subjectReturn
  }
}
