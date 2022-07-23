import { PYStoryDataAccessLogic } from "../interfaces/story-data-access-logic.interface";
import { PYStoryDocument } from "./story.document";
import storySchema from "./story.schema";

export class PYStoryDAO implements PYStoryDataAccessLogic {
    async getStory(id: string): Promise<PYStoryDocument | null> {
        return await storySchema.findById(id);
    }
}