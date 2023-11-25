import {DateTime} from 'luxon'
import {BaseModel, column, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Users from "App/Models/Users";

export default class ContactRequest extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @hasOne(() => Users)
  public user_id: HasOne<typeof Users>

  @hasOne(() => Users)
  public with_user_id: HasOne<typeof Users>

  @hasOne(() => ContactRequest)
  public origin_request: HasOne<typeof ContactRequest>

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime
}
