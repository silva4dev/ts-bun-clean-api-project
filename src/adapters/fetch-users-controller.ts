import FetchUsersService from '@/core/users/services/fetch-users-service'
import Elysia from 'elysia'

export default class FetchUsersController {
  constructor(
    public readonly server: Elysia,
    public readonly useCase: FetchUsersService,
  ) {
    server.get('/users', async () => {
      return useCase.execute()
    })
  }
}
