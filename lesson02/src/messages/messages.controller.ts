import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {
  }

  @Get()
  listMessages() {
  }

  @Post()
  addMessages(@Body() request: CreateMessageDto) {
    console.log(request);
  }

  @Get('/:id')
  getMessageById(@Param('id') messageId: string) {
  }
}
