import GetSubjects from '../usecases/get_subjects.js'
import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'
import CreateSubjects from '../usecases/create_subjects.js'
import { TCreateSubject } from '#models/types/TSubject'

export default class SubjectsController {
  static async getSubjectsByUserId(auth: Authenticator<Authenticators>) {
    const userId = auth.user!.id
    return GetSubjects.getSubjectsByUserId(userId)
  }

  static async getSubjectsById(id: number) {
    return GetSubjects.getSubjectsById(id)
  }

  static async CreateSubject(auth: Authenticator<Authenticators>, request: Request) {
    const userId = auth.user!.id
    const subjectName = request.body().name

    const subject: TCreateSubject = {
      name: subjectName,
      creator_id: userId,
    }
    return CreateSubjects.createSubject(subject)
  }
}
