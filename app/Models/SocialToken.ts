import {DateTime} from 'luxon'
import {BaseModel, HasOne, column, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Users from "App/Models/Users";

export default class SocialToken extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @hasOne(() => Users)
  public user_id: HasOne<typeof Users>

  @column()
  public token: string

  @column()
  public type: string

  @column()
  public refreshToken: string

  @column()
  public expiresAt: String

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
