import { injectable, inject } from 'tsyringe';

import IPersonsRepository from '@repositories/IPersonsRepository';

interface IRequest {
  person_id: string;
}

@injectable()
export default class DeletePersonService {
  constructor(
    @inject('PersonsRepository')
    private personsRepository: IPersonsRepository,
  ) {}

  public async execute({ person_id }: IRequest): Promise<void> {
    await this.personsRepository.deleteById(person_id);
  }
}
