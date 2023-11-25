import {DateTime} from 'luxon'
import {BaseModel, column, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import {RequestStatus} from "App/json/type/RequestStatus";
import Users from "App/Models/Users";

export default class ContactRequest extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @hasOne(() => Users)
  public request_from_user_id: HasOne<typeof Users>

  @hasOne(() => Users)
  public request_to_user_id: HasOne<typeof Users>

  @column()
  public scope: RequestStatus

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime
}
