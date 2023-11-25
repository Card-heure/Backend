import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('with_user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.integer('origin_request').unsigned().references('contact_requests.id').onDelete('CASCADE')
      table.timestamp('created_at', {useTz: true})

      table.unique(['user_id', 'with_user_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
