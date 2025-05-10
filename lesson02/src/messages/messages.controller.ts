import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesRepository } from './messages.repository';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly messageRepo: MessagesRepository,
  ) {}

  @Get()
  listMessages() {}

  @Post()
  addMessages(@Body() request: CreateMessageDto) {
    console.log(request);
    return this.messageRepo.findOne('12');
  }

  @Get('/:id')
  getMessageById(@Param('id') messageId: string) {}
}
