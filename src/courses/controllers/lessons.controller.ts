import { Controller, Get, ParseIntPipe, Query, BadRequestException } from '@nestjs/common';
import { LessonRepository } from '../repositories/lessons.repository';

@Controller('lessons')
export class LessonControllers {
    constructor(private lessonRepo: LessonRepository) { }
    @Get()
    searchLesson(
        @Query('courseId') courseId: string,
        @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
        @Query('pageSize') pageSize = '3',
        @Query('pageNumber') pageNumber = '0',
    ) {
        if (!courseId) {
            throw new BadRequestException('CourseId is required')
        }
        if (sortOrder !== 'asc' && sortOrder !== 'desc') {
            throw new BadRequestException('sortOrder must be either asc or desc')
        }
        return this.lessonRepo.search(courseId, sortOrder, parseInt(pageNumber), parseInt(pageSize));
    }
}