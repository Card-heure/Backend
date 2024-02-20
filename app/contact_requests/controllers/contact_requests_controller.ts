import GetContactRequests from '#contact_request/usecases/get_contact_requests'

export default class ContactRequestsController {
  static async getContactRequestsByUserId(userId: number) {
    return GetContactRequests.getContactRequestsByUserId(userId)
  }

  static async getContactRequestsById(id: number) {
    return GetContactRequests.getContactRequestsById(id)
  }

  static async createContactRequest(fromUserId: number, toUserId: number) {
    return GetContactRequests.createContactRequest(fromUserId, toUserId)
  }

  static async updateContactRequest(id: number, status: number) {
    return GetContactRequests.updateContactRequest(id, status)
  }

  static async deleteContactRequest(id: number) {
    return GetContactRequests.deleteContactRequest(id)
  }
}
