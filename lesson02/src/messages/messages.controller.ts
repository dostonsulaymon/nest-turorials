import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
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
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  addMessages(@Body() request: CreateMessageDto) {
    return this.messagesService.create(request.content);
  }

  @Get('/:id')
  async getMessageById(@Param('id') messageId: string) {
    const message = await this.messageRepo.findOne(messageId);
    if (!message) {
      throw new NotFoundException('Message not found');
    }
    return message;
  }
}
