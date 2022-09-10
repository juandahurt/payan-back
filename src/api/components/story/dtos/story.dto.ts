import { PYStoryChapterDTO } from "./story-chapter.dto";

export class PYStoryDTO {
    hash: string;
    chapters: PYStoryChapterDTO[];

    constructor(hash: string, chapters: PYStoryChapterDTO[]) {
        this.hash = hash;
        this.chapters = chapters;
    }
}