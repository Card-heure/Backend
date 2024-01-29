/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const UserController = () => import('#users/controllers/user_controller')

const SessionController = () => import('#auth/controllers/session_controller')

router.get('/', async ({ response }) => response.ok({ uptime: process.uptime() }))
router.get('health', ({ response }) => response.noContent())

router.get('login', [SessionController, 'create'])
router.get('login-callback', [SessionController, 'store'])
router.delete('logout', [SessionController, 'destroy'])
router
  .group(() => {
    router.get('user', [UserController, 'getUser'])
  })
  .prefix('api')
  .middleware(middleware.auth())
