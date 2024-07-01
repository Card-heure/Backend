import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.raw(
      "INSERT INTO users (full_name, email, password) VALUES ('Madison','madison@example.com','$scrypt$n=16384,r=8,p=1$cK+BOlMQ2LSRLdTeKnZjGg$U1Ikicnc5nTrjhTx1UvuPlEedEZ3Chx2boFsIqf7K47tJhs+C1XXE1BZOrD6W35sWf2fRwHnewnoGRfvpm447A')"
    )
  }

  async down() {
    this.schema.raw("DELETE FROM users WHERE email = 'madison@example.com'")
  }
}
