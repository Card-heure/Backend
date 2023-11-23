import {DateTime} from 'luxon'
import {column, BaseModel} from '@ioc:Adonis/Lucid/Orm'
import {beforeSave} from "@adonisjs/lucid/build/src/Orm/Decorators";
import Hash from "@ioc:Adonis/Core/Hash";
import {UserScope} from "App/json/type/UserScope";

export default class Users extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public email: string

  @column({serializeAs: null})
  public password: string

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public profile_pic: string

  @column()
  public access_token: string

  @column()
  public rememberMeToken: string | null

  @column()
  public scope: UserScope

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(User: Users) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}

export function superAdmin(Users: Users) {
  return (Users.scope == UserScope.SuperAdmin)
}