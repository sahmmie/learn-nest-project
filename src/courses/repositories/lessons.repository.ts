import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Lesson } from 'src/shared/lesson';


@Injectable()
export class LessonRepository {
    constructor(@InjectModel('Lesson') private lessonModel: Model<Lesson>) { }
    search(courseId: string,
        sortOrder: string,
        pageNumber: number | any,
        pageSize: number | any) {
        return this.lessonModel.find({
            courseId
        }, null, {
            limit: pageSize,
            skip: pageNumber * pageSize,
            sort: {
                seqNo: sortOrder
            }
        })
    }
}