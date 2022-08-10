import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutorialModule } from './tutorial/tutorial.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:4DConnect@dev.an0nym0us.ca/test?directConnection=true&authMechanism=DEFAULT&authSource=admin'),TutorialModule],
})
export class AppModule {}
