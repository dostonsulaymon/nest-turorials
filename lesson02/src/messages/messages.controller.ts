import { Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  listMessages() {}

  @Post()
  addMessages() {}

  @Get('/:id')
  getMessageById(@Param('id') messageId: string) {}
}
