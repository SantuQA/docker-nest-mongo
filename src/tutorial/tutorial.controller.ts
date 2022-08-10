import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { Tutorial } from './schemas/tutorial.schema';
import { TutorialService } from './tutorial.service';

@Controller('tutorial')
export class TutorialController {
  constructor(private readonly tutorialService: TutorialService) {}
  // Create a new Tutorial
  @Post()
  async create(@Body()  createTutorialDto: CreateTutorialDto) {
    return await this.tutorialService.createPost(createTutorialDto);
  }
  
  // Retrieve all Tutorials
  @Get()
  async findAll(): Promise<Tutorial[]> {
    return this.tutorialService.findAll();
  }
  // Retrieve all published Tutorials
  @Get()
  findAllPublished() {}
  // Retrieve a single Tutorial with id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tutorial> {
    return this.tutorialService.findOne(id);
  }
  // Update a Tutorial with id
  @Patch()
  update() {}
  // Delete a Tutorial with id
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tutorialService.delete(id);
  }
  // Delete all Tutorial
  @Delete()
  removeAll() {}
}

