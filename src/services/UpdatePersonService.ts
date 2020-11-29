import { inject, injectable } from 'tsyringe';

import AppError from '@errors/AppError';
import IPersonsRepository from '@repositories/IPersonsRepository';
import Person from '@entities/Person';

interface IRequest {
  name: string;
  person_id: string;
  gender?: string;
  email?: string;
  birth_date: string;
  nationality?: string;
  naturalness?: string;
  cpf: string;
}

@injectable()
export default class UpdatePersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) {}

  public async execute({
    person_id,
    email,
    ...newInformations
  }: IRequest): Promise<Person> {
    const person = await this.personsRepository.findById(person_id);

    if (!person) {
      throw new AppError('Person not found');
    }

    if (email) {
      const userWithUpdatedEmail = await this.personsRepository.findByEmail(
        email,
      );

      if (userWithUpdatedEmail && userWithUpdatedEmail.id !== person_id) {
        throw new AppError('Email already in use');
      }

      person.email = email;
    }

    Object.assign(person, newInformations);

    return this.personsRepository.save(person);
  }
}
