import { ECardType } from '#models/enums/ECardType'

export interface TCard {
  id: number
  title: string
  cardType: ECardType
  cardContent: JSON
  creatorId: number
  subjectId: number
  createdAt: Date
  updatedAt: Date
}

export interface TCreateCard {
  creator_id: number
  title: string
  content: JSON
  content_type: number
  subject_id: number
}
export interface TUpdateCard {
  title: string
  content: JSON
}
