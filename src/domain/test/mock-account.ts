import { AuthenticationParams } from '../usecases/authentication'
import faker from '@faker-js/faker'
import { AccountModel } from '../models/account-model'

export const mockAuthetication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.word()
})
