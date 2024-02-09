import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose, Secret } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string | null

  @column()
  declare email: string

  @column()
  declare profilePic: string

  @column({
    prepare: (accessToken: Secret<string>) => accessToken.release(),
    consume: (accessToken) => new Secret(accessToken),
  })
  declare accessToken: Secret<string>

  @column()
  declare googleId: String

  @column()
  declare scope: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
