import UseCase from '@/core/shared/use-case'
import UserRepository from '../repositories/user-repository'
import User from '../models/user'

export default class FetchUsersService implements UseCase<void, User[]> {
  constructor(public readonly repository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.repository.findAll()
  }
}
