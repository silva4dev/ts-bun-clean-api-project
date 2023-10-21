import User from '../models/user'

export default interface UserRepository {
  findAll(): Promise<User[]>
  findByEmail(email: string): Promise<User | null>
  findById(id: number): Promise<User | null>
  create(user: User): Promise<User>
}
