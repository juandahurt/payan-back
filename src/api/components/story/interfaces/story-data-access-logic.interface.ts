import { PYStoryDocument } from "../dal/story.document";

export interface PYStoryDataAccessLogic {
    getStory(id: string): Promise<PYStoryDocument | null>;
    list(): Promise<PYStoryDocument[]>;
}