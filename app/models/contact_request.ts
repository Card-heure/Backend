import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ContactRequest extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fromUserId: number

  @belongsTo(() => User)
  declare fromUser: BelongsTo<typeof User>

  @column()
  declare toUserId: number

  @belongsTo(() => User)
  declare toUser: BelongsTo<typeof User>

  @column()
  declare status: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
