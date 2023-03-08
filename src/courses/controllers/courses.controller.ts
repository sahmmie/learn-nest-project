import { CoursesRepository } from './../repositories/courses.repository';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Course } from '../../shared/course';

@Controller('courses')
export class CoursesController {
    constructor(private coursesRepo: CoursesRepository) {

    }

    @Get()
    async findAllCourses(): Promise<Course[]> {
        return this.coursesRepo.findAll();
    }

    @Put(':courseId')
    async updateCourse(@Param('courseId') courseId: string, @Body() changes: Course): Promise<Course> {
        return this.coursesRepo.updateCourse(courseId, changes)
    }

    @Delete(':courseId')
    async deleteCourse(@Param('courseId') courseId: string): Promise<any> {
        return this.coursesRepo.deleteCourse(courseId)
    }

    @Post('new')
    async createCourse(@Body() course: Course): Promise<Course> {
        return this.coursesRepo.addCourse(course);
    }

    @Get(':courseUrl')
    async findCourseByUrl(@Param('courseUrl') courseUrl: string): Promise<any> {
        const course = await this.coursesRepo.findCourseByUrl(courseUrl);
        if (!course) {
            throw new NotFoundException(courseUrl + ' Course not found');
        }
        return course;
    }
}
