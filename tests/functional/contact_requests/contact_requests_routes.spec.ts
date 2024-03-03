import { test } from '@japa/runner'
import User from '#models/user'
import { createContactRequest, createUser } from '#tests/test_entity_builder'
import ContactRequest from '#models/contact_request'
import ContactRequestsController from '#contact_request/controllers/contact_requests_controller'
import { ContactRequestStatus } from '#enums/contact_request_status'

test.group('contact request', (group) => {
  var John: User
  var Jean: User
  var contactRequest: ContactRequest
  group.each.setup(async () => {
    John = await createUser()
    Jean = await createUser('Jean DUPONT', 'jean.dupont@cardheu.re')
    contactRequest = await createContactRequest(John, Jean)
  })
  group.each.teardown(async () => {
    await John.delete()
    await Jean.delete()
    await contactRequest.delete()
  })

  test('Create a contact request', async ({ assert }) => {
    // Create a contact request
    assert.containsSubset(await ContactRequestsController.createContactRequest(John.id, Jean.id), {
      fromUserId: John.id,
      toUserId: Jean.id,
    })
  })

  test('Get contact requests from user id', async ({ assert }) => {
    // Get all contact requests
    assert.containsSubset(await ContactRequestsController.getContactRequestsFromUserId(John.id), {
      id: contactRequest.id,
      fromUserId: John.id,
      toUserId: Jean.id,
    })
  })

  test('Get contact requests to user id', async ({ assert }) => {
    // Get all contact requests
    assert.containsSubset(await ContactRequestsController.getContactRequestsToUserId(John.id), {
      id: contactRequest.id,
      fromUserId: John.id,
      toUserId: Jean.id,
    })
  })

  test('Get a contact request by id', async ({ assert }) => {
    // Get a contact request by id
    assert.containsSubset(
      await ContactRequestsController.getContactRequestsById(contactRequest.id),
      { id: contactRequest.id, fromUserId: John.id, toUserId: Jean.id }
    )
  })

  test('Update a contact request', async ({ assert }) => {
    // Update a contact request
    assert.containsSubset(
      await ContactRequestsController.updateContactRequest(
        contactRequest.id,
        ContactRequestStatus.ACCEPTED
      ),
      {
        id: contactRequest.id,
        fromUserId: John.id,
        toUserId: Jean.id,
        status: ContactRequestStatus.ACCEPTED,
      }
    )
  })

  test('Delete a contact request', async ({ assert }) => {
    // Delete a contact request
    assert.notContainsSubset(
      await ContactRequestsController.deleteContactRequest(contactRequest.id),
      {
        id: contactRequest.id,
        fromUserId: John.id,
        toUserId: Jean.id,
        status: ContactRequestStatus.PENDING,
      }
    )
  })
})
