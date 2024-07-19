import { TUpdateCard } from '#models/types/TCard'
import db from '@adonisjs/lucid/services/db'

export default class UpdateCard {
  static async updateCard(id: number, updateCard: TUpdateCard) {
    return db.from('cards').where('id', id).update(updateCard).returning('*').first()
  }
}
