import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'contact_requests'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('request_from_user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('request_to_user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.tinyint('status').defaultTo(1)
      table.timestamp('created_at', {useTz: true})
      table.timestamp('updated_at', {useTz: true})

      table.unique(['request_from_user_id', 'request_to_user_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
