import { TCreateCard } from '#models/types/TCard'
import db from '@adonisjs/lucid/services/db'

export default class CreateCard {
  static async createCard(createCard: TCreateCard) {
    const cardReturn = db.table('cards').returning('*').insert(createCard)
    return cardReturn
  }
}
