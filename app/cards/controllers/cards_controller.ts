// import type { HttpContext } from '@adonisjs/core/http'

import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'
import { TCreateCard } from '#models/types/TCard'
import CreateCard from '../usecases/create_cards.js'
import GetCards from '../usecases/get_cards.js'

export default class CardsController {
  static async CreateCards(auth: Authenticator<Authenticators>, request: Request) {
    const userId = auth.user!.id
    const createCard = request.body() as TCreateCard
    createCard.creator_id = userId

    return CreateCard.createCard(createCard)
  }

  static async GetCardsByUserId(auth: Authenticator<Authenticators>) {
    const userId = auth.user!.id
    return GetCards.getCardsByUserId(userId)
  }
  static async GetCardById(id: number) {
    return GetCards.getCardsById(id)
  }
  static async GetCardsBySubjectId(subjectId: number) {
    return GetCards.getCardsBySubjectId(subjectId)
  }
}
