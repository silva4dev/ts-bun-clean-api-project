import User from '@/core/users/models/user'
import UserRepository from '@/core/users/repositories/user-repository'
import { PrismaClient } from '@prisma/client'

export default class UserRepositoryPrismaPg implements UserRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    })
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    })
  }

  async create(user: User): Promise<User> {
    return this.prisma.user.create({
      data: user,
    })
  }
}
