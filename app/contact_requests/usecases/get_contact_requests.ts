import ContactRequest from '#models/contact_request'

export default class GetContactRequests {
  static getContactRequestsByUserId(userId: number) {
    return ContactRequest.findBy('fromUserId', userId)
  }

  static getContactRequestsByToUserId(userId: number) {
    return ContactRequest.findBy('toUserId', userId)
  }

  static getContactRequestsById(id: number) {
    return ContactRequest.find(id)
  }

  static async createContactRequest(fromUserId: number, toUserId: number) {
    return await ContactRequest.create({
      fromUserId: fromUserId,
      toUserId: toUserId,
    })
  }

  static async updateContactRequest(id: number, status: number) {
    const contactRequest = await ContactRequest.find(id)
    if (!contactRequest) {
      throw new Error('Contact request not found')
    }
    contactRequest.status = status
    return await contactRequest.save()
  }

  static async deleteContactRequest(id: number) {
    const contactRequest = await ContactRequest.find(id)
    if (!contactRequest) {
      throw new Error('Contact request not found')
    }
    return await contactRequest.delete()
  }
}
