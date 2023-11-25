import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('first_name', 50).notNullable()
      table.string('last_name', 50).notNullable()
      table.string('password', 180).nullable()
      table.text('profile_pic', 'longtext')
      table.string('access_token')
      table.string('remember_me_token').nullable()
      table.tinyint('scope').defaultTo(1)

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', {useTz: true}).notNullable()
      table.timestamp('updated_at', {useTz: true}).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
