import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly repository: Repository<UsersEntity>,
  ) { }

  async createUser(dto: CreateUserDto) {
    const newUser = this.repository.create({
      email: dto.email,
      password: dto.password,
    });

    return await this.repository.save(newUser);
  }

  async findOne(id: number) {
    const user = await this.repository.findOneBy({ id });
    return user;
  }

  async update(id: number, attributes: Partial<UsersEntity>) {
    

    const user = await this.findOne(id);
 
    Object.assign(user, attributes);

    return this.repository.save(user);
  }
}