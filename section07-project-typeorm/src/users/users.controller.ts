import { Body, Controller, Get, HostParam, Ip, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { Serialize } from '../interceptors/custom-interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async createUser(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @Get()
  @Serialize(UserDto)
  async findAllUsers(@Ip() ip: string, @HostParam() host: string) {
    console.log(`Request from ${ip}`);
    console.log(`Request from ${JSON.stringify(host)}`);
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async findOne(id: number) {
    return this.usersService.findOne(id);
  }
}
