import db from '@adonisjs/lucid/services/db'
import { TCreateSubject } from '#models/types/TSubject'

export default class CreateSubjects {
  static async createSubject(createSubject: TCreateSubject) {
    console.log('createSubject:', createSubject)
    const subjectReturn = db.table('subjects').returning('*').insert(createSubject)
    console.log('subjectreturn:', subjectReturn)
    return subjectReturn
  }
}
