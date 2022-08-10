import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tutorial, TutorialSchema } from './schemas/tutorial.schema';
import { TutorialController } from './tutorial.controller';
import { TutorialService } from './tutorial.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tutorial.name, schema: TutorialSchema },
    ]),
  ],
  controllers: [TutorialController],
  providers: [TutorialService],
})
export class TutorialModule {}
