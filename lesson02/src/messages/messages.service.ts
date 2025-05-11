import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private readonly messageRepo: MessagesRepository) {}

  async findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  async findAll() {
    return this.messageRepo.findAll();
  }
  async create(content: string) {
    return this.messageRepo.create(content);
  }
}
