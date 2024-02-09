import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('full_name').nullable()
      table.string('email').notNullable().unique()
      table.text('profile_pic', 'longtext').notNullable()
      table.string('access_token').notNullable()
      table.string('google_id').notNullable()
      table.tinyint('scope').notNullable().defaultTo(1)
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
