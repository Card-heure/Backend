import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Subject from '#models/subject'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare creatorId: number

  @belongsTo(() => User)
  declare creator: BelongsTo<typeof User>

  @column()
  declare title: string

  @column()
  declare content: JSON

  @column()
  declare status: number

  @column()
  declare content_type: number

  @column()
  declare subjectId: number

  @belongsTo(() => Subject)
  declare subject: BelongsTo<typeof Subject>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
