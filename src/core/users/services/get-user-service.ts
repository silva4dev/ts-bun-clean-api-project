import UseCase from '@/core/shared/use-case'
import User from '../models/user'
import UserRepository from '../repositories/user-repository'

export default class GetUserService implements UseCase<number, User | null> {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: number): Promise<User | null> {
    const user = await this.repository.findById(id)

    if (!user) {
      throw new Error('User not found.')
    }

    return user
  }
}
