import mongoose from "mongoose";
import { PYStoryChapterDTO } from "../dtos/story-chapter.dto";

export interface PYStoryDocument extends mongoose.Document {
    hash: string;
    title: string;
    image: string;
    chapters: PYStoryChapterDTO[];
}