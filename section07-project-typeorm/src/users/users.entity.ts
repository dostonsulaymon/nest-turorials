import { Entity } from 'typeorm';

@Entity('users')
export class UsersEntity {

  @
  id: number;
  name: string;
  email: string;
  password: string;
}
