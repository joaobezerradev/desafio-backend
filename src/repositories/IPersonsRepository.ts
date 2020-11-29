import Person from '@entities/Person';
import ICreatePersonDTO from '@dtos/ICreatePersonDTO';

export default interface IPersonsRepository {
  findAll(): Promise<Person[]>;
  findById(id: string): Promise<Person | undefined>;
  findByEmail(email: string): Promise<Person | undefined>;
  create(data: ICreatePersonDTO): Promise<Person>;
  save(person: Person): Promise<Person>;
  deleteById(person_id: string): Promise<void>;
}
