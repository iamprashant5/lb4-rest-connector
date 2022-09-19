import {inject, Provider} from '@loopback/core';
import { Filter } from '@loopback/repository';
import {getService} from '@loopback/service-proxy';
import {OpenApiDataSource} from '../datasources';
import { User } from '../models';

export interface UserApi {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  create(user: User): Promise<User>;
  find(filter?: Filter<User>): Promise<User[]>;
  findById(id: number, filter?: Filter<User>): Promise<User>;
  update(id: number, user: User): Promise<void>;
  delete(id: number): Promise<void>;
}

export class UserApiProvider implements Provider<UserApi> {
  constructor(
    // rest must match the name property in the datasource json file
    @inject('datasources.openApi')
    protected dataSource: OpenApiDataSource = new OpenApiDataSource(),
  ) {}

  value(): Promise<UserApi> {
    return getService(this.dataSource);
  }
}
