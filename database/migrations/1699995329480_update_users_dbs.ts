import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('first_name', 50).notNullable()
      table.string('last_name', 50).notNullable()
      table.text('profile_pic', 'longtext')
    })
  }

  public async down() {
    this.schema.table('users', (table) => {
      table.dropColumns('first_name', 'last_name', 'profile_pic')
    })
  }
}
