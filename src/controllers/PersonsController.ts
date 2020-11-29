import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePersonService from '@services/CreatePersonService';
import UpdatePersonService from '@services/UpdatePersonService';
import ListAllPersonsService from '@services/ListAllPersons';
import DeletePersonService from '@services/DeletePersonService';
import ListOnePerson from '@services/ListOnePerson';

export default class PersonsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllPersons = container.resolve(ListAllPersonsService);

    const persons = await listAllPersons.execute();

    return response.json(persons);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const person_id = request.params.id;
    
    const listOnePerson = container.resolve(ListOnePerson);

    const person = await listOnePerson.execute({person_id});
    return response.json(person);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const {
      name,
      gender,
      email,
      birth_date,
      nationality,
      naturalness,
      cpf,
    } = request.body;

    const createPerson = container.resolve(CreatePersonService);

    const person = await createPerson.execute({
      name,
      gender,
      email,
      birth_date,
      nationality,
      naturalness,
      cpf,
      user_id,
    });

    return response.status(201).json(person);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const person_id = request.params.id;
    const {
      birth_date,
      cpf,
      name,
      email,
      gender,
      nationality,
      naturalness,
    } = request.body;

    const updatePerson = container.resolve(UpdatePersonService);

    const updatedPerson = await updatePerson.execute({
      birth_date,
      cpf,
      name,
      person_id,
      email,
      gender,
      nationality,
      naturalness,
    });

    return response.json(updatedPerson);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const person_id = request.params.id;
    const deletePerson = container.resolve(DeletePersonService);

    await deletePerson.execute({ person_id });

    return response.status(204).json();
  }
}
