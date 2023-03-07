import { Schema } from 'mongoose';

export const courseSchema = new Schema({
    seqNo: Number,
    url: String,
    iconUrl: String,
    courseListIcon: String,
    description: String,
    longDescription: String,
    category: String,
    lessonsCount: Number,
    promo: Boolean
})