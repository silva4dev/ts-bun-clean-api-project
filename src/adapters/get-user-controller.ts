import GetUserService from '@/core/users/services/get-user-service'
import Elysia from 'elysia'

export default class GetUserController {
  constructor(
    public readonly server: Elysia,
    public readonly useCase: GetUserService,
  ) {
    server.get('/users/:id', async ({ params }) => {
      return useCase.execute(parseInt(params.id))
    })
  }
}
