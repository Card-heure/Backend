import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('profile_pic')
      table.string('first_name').nullable()
      table.string('last_name').nullable()
      table.date('birth_date').nullable()
      table.integer('gender').defaultTo(2)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('first_name')
      table.dropColumn('last_name')
      table.dropColumn('birth_date')
      table.dropColumn('gender')
      table.string('profile_pic').nullable()
    })
  }
}
