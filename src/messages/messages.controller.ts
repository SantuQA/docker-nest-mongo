import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  /* 
  //Without Dependency Injection
  constructor() {
    this.messagesService = new MessagesService();
  } */
  constructor(public messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    console.log(message);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
