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
import { middleware } from '#start/kernel'
import SubjectsController from '../app/subjects/controllers/subjects_controller.js'
import CardsController from '../app/cards/controllers/cards_controller.js'

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

    //subject routes
    router.get('subjects', ({ auth }) => SubjectsController.getSubjectsByUserId(auth))
    router.get('subject/:id', ({ params }) => SubjectsController.getSubjectsById(params.id))
    router.post('subject', ({ auth, request }) => SubjectsController.CreateSubject(auth, request))

    //Card routes
    router.post('card', ({ auth, request }) => CardsController.CreateCards(auth, request))
    router.get('cards', ({ auth }) => CardsController.GetCardsByUserId(auth))
    router.get('card/:id', ({ params }) => CardsController.GetCardById(params.id))
    router.get('cards/subject/:id', ({ params }) => CardsController.GetCardsBySubjectId(params.id))
  })
  .prefix('api')
  .middleware(middleware.auth())
