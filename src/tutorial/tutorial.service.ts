import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { Tutorial, TutorialDocument } from './schemas/tutorial.schema';

@Injectable()
export class TutorialService {
  constructor(
    @InjectModel(Tutorial.name)
    private readonly tutorialModel: Model<TutorialDocument>,
  ) {}

  /* async create(createTutorialDto: CreateTutorialDto): Promise<Tutorial> {
    const createdCat = await this.tutorialModel.create(createTutorialDto);
    return createdCat;
  } */
  async createPost(data): Promise<Tutorial> {
    const post = await new this.tutorialModel(data).save();

    return post;   }

  async findAll(): Promise<Tutorial[]> {
    return this.tutorialModel.find().exec();
  }

  async findOne(id: string): Promise<Tutorial> {
    return this.tutorialModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.tutorialModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
