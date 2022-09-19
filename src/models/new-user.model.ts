import {Entity, model, property} from '@loopback/repository';

@model()
export class NewUser extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'object',
  })
  address?: object;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
    required: true,
  })
  website: string;

  @property({
    type: 'object',
    required: true,
  })
  company: object;


  constructor(data?: Partial<NewUser>) {
    super(data);
  }
}

export interface NewUserRelations {
  // describe navigational properties here
}

export type NewUserWithRelations = NewUser & NewUserRelations;
