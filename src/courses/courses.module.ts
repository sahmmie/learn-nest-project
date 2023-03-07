import { CoursesController } from './controllers/courses.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesRepository } from './repositories/courses.repository';
import { courseSchema } from './schemas/courses.scehma';
import { LessonSchema } from './schemas/lesson.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Course',
            schema: courseSchema
        },
        {
            name: 'Lesson',
            schema: LessonSchema
        }
        ])
    ],
    controllers: [CoursesController],
    providers: [CoursesRepository],
})
export class CoursesModule { }
