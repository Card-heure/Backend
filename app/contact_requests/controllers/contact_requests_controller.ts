import GetContactRequests from '#contact_request/usecases/get_contact_requests'

export default class ContactRequestsController {
  static async getContactRequestsByUserId(userId: number) {
    return GetContactRequests.getContactRequestsByUserId(userId)
  }

  static async getContactRequestsById(id: number) {
    return GetContactRequests.getContactRequestsById(id)
  }
}
