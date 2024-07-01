export interface TSubject {
  id: number
  name: string
  creatorId: number
  createdAt: Date
  updatedAt: Date
}

export interface TCreateSubject {
  creator_id: number
  name: string
}
