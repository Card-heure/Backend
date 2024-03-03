/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import userController from '#users/controllers/user_controller'
import contactRequestController from '#contact_request/controllers/contact_requests_controller'
import contactController from '#contact/controllers/contacts_controller'
import { middleware } from '#start/kernel'

const SessionController = () => import('#auth/controllers/session_controller')

router.get('/', async ({ response }) => response.ok({ uptime: process.uptime() }))
router.get('health', ({ response }) => response.noContent())

// Auth routes
router.get('login', [SessionController, 'create'])
router.get('login-callback', [SessionController, 'store'])
router.delete('logout', [SessionController, 'destroy'])

//API routes (protected by auth middleware)
router
  .group(() => {
    // User routes
    router.get('user/:id', ({ params }) => userController.getUser(params.id))
    router.get('users', userController.getUsers)

    // Contact request routes
    router.get('contact-requests/fromUser/:id', ({ params }) =>
      contactRequestController.getContactRequestsFromUserId(params.id)
    )
    router.get('contact-requests/toUser/:id', ({ params }) =>
      contactRequestController.getContactRequestsToUserId(params.id)
    )
    router.get('contact-requests/:id', ({ params }) =>
      contactRequestController.getContactRequestsById(params.id)
    )

    // Contact routes
    router.get('contacts/user/:id', ({ params }) =>
      contactController.getContactsByUserId(params.id)
    )
    router.get('contacts/:id', ({ params }) => contactController.getContactsById(params.id))
  })
  .prefix('api')
  .middleware(middleware.auth())
