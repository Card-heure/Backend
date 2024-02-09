import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cards'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable()
      table.string('title').notNullable()
      table.json('content').notNullable()
      table.tinyint('status').defaultTo(0).notNullable()
      table
        .integer('content_type_id')
        .unsigned()
        .references('id')
        .inTable('content_types')
        .onDelete('CASCADE')
        .notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
