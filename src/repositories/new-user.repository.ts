import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserDataSource} from '../datasources';
import {NewUser, NewUserRelations} from '../models';

export class NewUserRepository extends DefaultCrudRepository<
  NewUser,
  typeof NewUser.prototype.id,
  NewUserRelations
> {
  constructor(
    @inject('datasources.user') dataSource: UserDataSource,
  ) {
    super(NewUser, dataSource);
  }
}
