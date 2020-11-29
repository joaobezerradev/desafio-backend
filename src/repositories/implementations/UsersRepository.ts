import { getRepository, Repository } from 'typeorm';

import User from '@entities/User';
import ICreateUserDTO from '@dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne(id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ email });
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = this.usersRepository.create(data);

    await this.usersRepository.save(user);

    return user;
  }
}
