import UseCase from '@/core/shared/use-case'
import UserRepository from '../repositories/user-repository'

type Input = {
  name: string
  email: string
  password: string
}

export default class CreateUserService implements UseCase<Input, void> {
  constructor(private readonly repository: UserRepository) {}

  async execute(input: Input): Promise<void> {
    const { name, email, password } = input

    const userAlreadyExists = await this.repository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    await this.repository.create({ name, email, password })
  }
}
