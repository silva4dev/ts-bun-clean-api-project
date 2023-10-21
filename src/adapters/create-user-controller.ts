import CreateUserService from '@/core/users/services/create-user-service'
import Elysia from 'elysia'

type CreateUserRequest = {
  name: string
  email: string
  password: string
}

export default class CreateUserController {
  constructor(
    public readonly server: Elysia,
    public readonly useCase: CreateUserService,
  ) {
    server.post('/users', async ({ body }) => {
      const { name, email, password } = body as CreateUserRequest

      await useCase.execute({ name, email, password })
    })
  }
}
