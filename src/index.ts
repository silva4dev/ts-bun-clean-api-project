import app from './external/api/config'

import UserRepositoryPrismaPg from './external/prisma/user-repository-prisma-pg'
import CreateUserController from './adapters/create-user-controller'
import FetchUsersController from './adapters/fetch-users-controller'
import CreateUserService from './core/users/services/create-user-service'
import FetchUsersService from './core/users/services/fetch-users-service'
import GetUserService from './core/users/services/get-user-service'
import GetUserController from './adapters/get-user-controller'

const userRepository = new UserRepositoryPrismaPg()
const createUserService = new CreateUserService(userRepository)
new CreateUserController(app, createUserService)

const fetchUsersService = new FetchUsersService(userRepository)
new FetchUsersController(app, fetchUsersService)

const getUserService = new GetUserService(userRepository)
new GetUserController(app, getUserService)

app.listen(3333)

console.log(`🦊 Server running at ${app.server?.hostname}:${app.server?.port}`)
