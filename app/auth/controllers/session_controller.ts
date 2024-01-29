import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { Secret } from '@adonisjs/core/helpers'

export default class SessionController {
  create({ ally }: HttpContext) {
    return ally.use('google').redirect()
  }

  async store({ ally, response, auth }: HttpContext) {
    const google = ally.use('google')

    if (google.accessDenied()) {
      return 'access denied'
    }

    if (google.stateMisMatch()) {
      return 'state mismatch'
    }

    if (google.hasError()) {
      return 'error'
    }

    const googleUser = await google.user()

    const user = await User.updateOrCreate(
      {
        googleId: googleUser.id,
      },
      {
        fullName: googleUser.nickName,
        email: googleUser.email,
        profilePic: googleUser.avatarUrl,
        accessToken: new Secret(googleUser.token.token),
        refreshToken: new Secret(googleUser.token.refreshToken!),
      }
    )

    await auth.use('web').login(user)

    return response.redirect('/')
  }

  async destroy({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect('/')
  }
}
