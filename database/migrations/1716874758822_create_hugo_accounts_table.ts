import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.raw(
      "INSERT INTO users (full_name, email, password) VALUES ('Hugo Combe','hugo.combe.84@gmail.com','$scrypt$n=16384,r=8,p=1$Pn9Be5JtQbnhUcT9WT3RGw$BpIGQzmAHFC6SjSFSi47OtE8F4+YFcebEDvy1WhsC6mHnUUeYp6oJ1q1RQg3sOKf3PZMzIopzReXg593PCor8w')"
    )
  }

  async down() {
    this.schema.raw("DELETE FROM users WHERE email = 'hugo.combe.84@gmail.com'")
  }
}
