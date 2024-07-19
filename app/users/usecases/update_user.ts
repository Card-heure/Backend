import db from '@adonisjs/lucid/services/db'
import { TUpdateUser } from '#models/types/TUser'

export default class UpdateUser {
  static async updateUser(id: number, data: TUpdateUser) {
    return db.from('users').where('id', id).update(data).returning('*').first()
  }
}
