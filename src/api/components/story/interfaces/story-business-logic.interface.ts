import { PYStoryDTO } from "../dtos/story.dto";
import { PYStoryDataAccessLogic } from "./story-data-access-logic.interface";

export interface PYStoryBusinessLogic {
    storyDAO: PYStoryDataAccessLogic;

    getStory(id: string): Promise<PYStoryDTO>
}