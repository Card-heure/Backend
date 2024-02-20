import User from '#models/user'
import { Secret } from '@adonisjs/core/helpers'
import ContactRequest from '#models/contact_request'

export async function createUser(
  name: string = 'John Doe',
  email: string = 'john.doe@cardheu.re',
  scope: number = 1
) {
  const user = await User.create({
    fullName: name,
    email: email,
    profilePic: 'profile_pic_url',
    accessToken: new Secret('dummy_token'),
    scope: scope,
    googleId: `${email}-GoogleId`,
  })
  return user
}

export async function createContactRequest(fromUser: User, toUser: User) {
  const contactRequst = await ContactRequest.create({
    fromUserId: fromUser.id,
    toUserId: toUser.id,
  })
  return contactRequst
}
