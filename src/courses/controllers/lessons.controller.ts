import { Controller, Get, ParseIntPipe, Query, BadRequestException } from '@nestjs/common';

@Controller('lessons')
export class LessonControllers {

    @Get()
    async searchLesson(
        @Query('courseId') courseId: string,
        @Query('courseId') sortOrder: 'asc' | 'desc' = 'asc',
        @Query('courseId', ParseIntPipe) pageNumber = 0,
        @Query('courseId', ParseIntPipe) pageSize = 3) {
        if (!courseId) {
            throw new BadRequestException('CourseId is required')
        }

        if (sortOrder !== 'asc' && sortOrder !== 'desc') {
            throw new BadRequestException('sortOrder must be either asc or desc')

        }
    }
}