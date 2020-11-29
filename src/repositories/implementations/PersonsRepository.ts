import { getRepository, Repository } from 'typeorm';

import ICreatePersonDTO from '@dtos/ICreatePersonDTO';
import Person from '@entities/Person';
import IPersonsRepository from '@repositories/IPersonsRepository';

export default class PersonsRepository implements IPersonsRepository {
  private personsRepository: Repository<Person>;

  constructor() {
    this.personsRepository = getRepository(Person);
  }

  public async findAll(): Promise<Person[]> {
    return this.personsRepository.find();
  }

  public async findById(id: string): Promise<Person | undefined> {
    return this.personsRepository.findOne(id);
  }

  public async findByEmail(email: string): Promise<Person | undefined> {
    return this.personsRepository.findOne({ email });
  }

  public async create(data: ICreatePersonDTO): Promise<Person> {
    const person = this.personsRepository.create(data);

    return this.personsRepository.save(person);
  }

  public async save(person: Person): Promise<Person> {
    return this.personsRepository.save(person);
  }

  public async deleteById(person_id: string): Promise<void> {
    const person = await this.personsRepository.findOne(person_id);

    if (person) {
      await this.personsRepository.remove(person);
    }
  }
}
