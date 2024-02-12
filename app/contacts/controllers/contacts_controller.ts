import GetContacts from '#contact/usecases/get_contacts'

export default class ContactRequestsController {
  static async getContactsByUserId(userId: number) {
    return GetContacts.getContactsByUserId(userId)
  }

  static async getContactsById(id: number) {
    return GetContacts.getContactsById(id)
  }
}
