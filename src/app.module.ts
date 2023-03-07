import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoursesModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
    dbName: 'test-db',
    directConnection: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
