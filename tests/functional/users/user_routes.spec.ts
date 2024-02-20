import { test } from '@japa/runner'
import UserController from '#users/controllers/user_controller'
import { createUser } from '#tests/test_entity_builder'
import User from '#models/user'

test.group('user routes', (group) => {
  var John: User
  var Jean: User
  group.each.setup(async () => {
    John = await createUser()
    Jean = await createUser('Jean DUPONT', 'jean.dupont@cardheu.re')
  })
  group.each.teardown(async () => {
    await John.delete()
    await Jean.delete()
  })

  test('Get all users', async ({ assert }) => {
    const userList = await UserController.getUsers()
    assert.containsSubset(userList, [
      { id: John.id, email: John.email },
      { id: Jean.id, email: Jean.email },
    ])
  })

  test('Get user by id', async ({ assert }) => {
    const userList = await UserController.getUser(John.id)
    assert.containsSubset(userList, { id: John.id, email: John.email })
  })
})
