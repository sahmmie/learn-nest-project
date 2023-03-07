import { Model } from 'mongoose';
import { Course } from './../../shared/course';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class CoursesRepository {
    constructor(@InjectModel('Course') private coourseModel: Model<Course>) {

    }

    async findAll(): Promise<Course[]> {
        return this.coourseModel.find();
    }

    async updateCourse(courseId: string, changes: Partial<Course>): Promise<Course> {
        return this.coourseModel.findOneAndUpdate({
            _id: courseId
        }, changes, { new: true })
    }

    async deleteCourse(courseId: string) {
        return this.coourseModel.deleteOne({ _id: courseId });
    }

    async addCourse(course: Partial<Course>): Promise<Course> {
        const newCourse = new this.coourseModel(course);
        await newCourse.save()
        return newCourse.toObject();
    }

    async findCourseByUrl(courseUrl: string): Promise<Course> {
        return this.coourseModel.findOne({ url: courseUrl });
    }
}