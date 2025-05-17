import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { hashPassword } from '../shared/hashing-util';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async register(dto: CreateUserDto) {
    const user = await this.userService.findByEmail(dto.email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    dto.password = await hashPassword(dto.password);

    return await this.userService.createUser(dto);
  }

  async login(dto: LoginDto) {
    const user = this.userService.findByEmail(dto.email);

    if (!user) {
      throw new BadRequestException('Email or password is incorrect');
    }
  }
}
