import { injectable, inject } from 'tsyringe';

import IPersonsRepository from '@repositories/IPersonsRepository';
import Person from '@entities/Person';
import AppError from '@errors/AppError';

interface IRequest {
  person_id: string;
}

@injectable()
export default class ListOnePerson {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) { }

  public async execute({ person_id }: IRequest): Promise<Person> {
    const person = await this.personsRepository.findById(person_id);

    if (!person){
      throw new AppError('Person was not found with this Id')
    }

    return person;
  }
}
