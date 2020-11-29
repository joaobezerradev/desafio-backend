import { container } from 'tsyringe';
import IUsersRepository from '@repositories/IUsersRepository';
import UsersRepository from '@repositories/implementations/UsersRepository';
import IPersonsRepository from '@repositories/IPersonsRepository';
import PersonsRepository from '@repositories/implementations/PersonsRepository';

import '../providers';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IPersonsRepository>(
  'PersonsRepository',
  PersonsRepository,
);
