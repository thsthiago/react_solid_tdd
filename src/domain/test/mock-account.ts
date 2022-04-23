import { AuthenticationParams } from '../usecases'
import { AccountModel } from '../models'
import faker from '@faker-js/faker'

export const mockAuthetication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.word()
})
