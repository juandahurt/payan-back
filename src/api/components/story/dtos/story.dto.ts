import { PYStoryChapterDTO } from "./story-chapter.dto";

export class PYStoryDTO {
    chapters: PYStoryChapterDTO[];

    constructor(chapters: PYStoryChapterDTO[]) {
        this.chapters = chapters;
    }
}