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
import { middleware } from '#start/kernel'

const UserController = () => import('#users/controllers/user_controller')

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
    router.get('users', [UserController, 'getUsers'])

    // Contact request routes
    router.get('contact-requests/user/:id', ({ params }) =>
      contactRequestController.getContactRequestsByUserId(params.id)
    )
    router.get('contact-requests/:id', ({ params }) =>
      contactRequestController.getContactRequestsById(params.id)
    )
  })
  .prefix('api')
  .middleware(middleware.auth())
