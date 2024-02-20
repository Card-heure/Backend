import { createUser } from '#tests/test_entity_builder'
import User from '#models/user'

export default class TestEntityCreator {
  static async createDefaultDateSet() {
    const John: User = await createUser()
    const Jean: User = await createUser('Jean DUPONT', 'jean.dupont@cardheu.re')

    return {
      John,
      Jean,
    }
  }
}
