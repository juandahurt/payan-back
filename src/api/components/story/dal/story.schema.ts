import mongoose from "mongoose";
import { PYStoryDocument } from "./story.document";

let PYStorySchema = new mongoose.Schema({
    hash: {
        type: String
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    chapters: {
        type: Array
    }
}, { collection: 'PYStory' });

export default mongoose.model<PYStoryDocument>("PYStory", PYStorySchema);