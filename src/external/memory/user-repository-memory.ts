import User from '@/core/users/models/user'
import UserRepository from '@/core/users/repositories/user-repository'

export default class UserRepositoryMemory implements UserRepository {
  private readonly users: User[] = []

  async findAll(): Promise<User[]> {
    return this.users
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) ?? null
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find((user) => user.id === id) ?? null
  }

  async create(user: User): Promise<User> {
    const newUser = { ...user, id: Math.random() }
    this.users.push(newUser)

    return newUser
  }
}
