import { Log } from './'
import Request from './request'


export default class UsersService {
  constructor() {
  }

  async getUsers(pagenumber) {
    Log.info('Get Users from Thirdparty service')
    const uri = 'https://reqres.in/api/users?page=' + pagenumber
    const method = 'GET'
    try {
      return await Request(uri, method)
    } catch (error) {
      Log.info('Error Occured while getting users', error)
      throw error
    }
  }
}