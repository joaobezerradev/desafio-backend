import { injectable, inject } from 'tsyringe';

import IPersonsRepository from '@repositories/IPersonsRepository';
import Person from '@entities/Person';

@injectable()
export default class ListAllPersonsService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) {}

  public async execute(): Promise<Person[]> {
    return this.personsRepository.findAll();
  }
}
