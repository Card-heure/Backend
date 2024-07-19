// import type { HttpContext } from '@adonisjs/core/http'

import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'
import { TCreateCard } from '#models/types/TCard'
import CreateCard from '../usecases/create_card.js'
import GetCard from '../usecases/get_card.js'
import DeleteCard from '../usecases/delete_card.js'

export default class CardsController {
  static async GetCardsByUserId(auth: Authenticator<Authenticators>) {
    const userId = auth.user!.id
    return GetCard.getCardsByUserId(userId)
  }
  static async GetCardById(id: number) {
    return GetCard.getCardsById(id)
  }
  static async GetCardsBySubjectId(subjectId: number) {
    return GetCard.getCardsBySubjectId(subjectId)
  }
  static async DeleteCard(id: number) {
    return DeleteCard.deleteCard(id)
  }
  static async CreateCards(auth: Authenticator<Authenticators>, request: Request) {
    const userId = auth.user!.id
    const createCard = request.body() as TCreateCard
    createCard.creator_id = userId

    return CreateCard.createCard(createCard)
  }
}
