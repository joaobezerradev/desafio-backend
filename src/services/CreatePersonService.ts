import { injectable, inject } from 'tsyringe';

import IPersonsRepository from '@repositories/IPersonsRepository';
import Person from '@entities/Person';

import AppError from '@errors/AppError';

interface IRequest {
  name: string;
  gender?: string;
  email?: string;
  birth_date: string;
  nationality?: string;
  naturalness?: string;
  cpf: string;
  user_id: string;
}

@injectable()
export default class CreatePersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) {}

  public async execute({
    name,
    email,
    birth_date,
    cpf,
    gender,
    nationality,
    naturalness,
    user_id,
  }: IRequest): Promise<Person> {
    if (email) {
      const checkUserExists = await this.personsRepository.findByEmail(email);

      if (checkUserExists) {
        throw new AppError('Email adress already used.');
      }
    }

    const person = await this.personsRepository.create({
      name,
      email,
      birth_date,
      cpf,
      gender,
      nationality,
      naturalness,
      user_id,
    });

    return person;
  }
}
