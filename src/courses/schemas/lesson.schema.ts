import mongoose from "mongoose";

export const LessonSchema = new mongoose.Schema({
    description: String,
    duration: String,
    seqNo: Number,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
});