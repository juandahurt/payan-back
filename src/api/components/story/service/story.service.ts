import { PYStoryDAO } from "../dal/story.dao";
import { PYStoryChapterDTO } from "../dtos/story-chapter.dto";
import { PYStoryDTO } from "../dtos/story.dto";
import { PYStoryBusinessLogic } from "../interfaces/story-business-logic.interface";
import { PYStoryDataAccessLogic } from "../interfaces/story-data-access-logic.interface";

export class PYStoryService implements PYStoryBusinessLogic {
  storyDAO: PYStoryDataAccessLogic;

  constructor() {
    this.storyDAO = new PYStoryDAO();
  }

  async getStory(id: string): Promise<PYStoryDTO> {
    let storyDoc = await this.storyDAO.getStory(id);
    if (storyDoc == null ){
      return new PYStoryDTO([]);
    }
    let story = new PYStoryDTO(
      storyDoc!.chapters.map((chapter) => {
        return new PYStoryChapterDTO(chapter.title, chapter.content);
      })
    );
    return story;
  }
}