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
import SubjectsController from '../app/subjects/controllers/subjects_controller.js'

const AuthController = () => import('#auth/controllers/auth_controller')

router.get('/', async ({ response }) => response.ok({ uptime: process.uptime() }))
router.get('health', ({ response }) => response.noContent())

// Auth routes
router.post('register', [AuthController, 'signin'])
router.post('login', [AuthController, 'login'])
router.delete('logout', [AuthController, 'logout'])

router
  .get('me', async ({ auth, response }) => {
    try {
      const user = auth.getUserOrFail()
      return response.ok(user)
    } catch (error) {
      return response.unauthorized({ error: 'User not found' })
    }
  })
  .use(middleware.auth())

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

    //subject routes
    router.get('subjects', ({ auth }) => SubjectsController.getSubjectsByUserId(auth))
    router.get('subject/:id', ({ params }) => SubjectsController.getSubjectsById(params.id))
    router.post('subject', ({ auth, request }) => SubjectsController.CreateSubject(auth, request))
  })
  .prefix('api')
  .middleware(middleware.auth())
