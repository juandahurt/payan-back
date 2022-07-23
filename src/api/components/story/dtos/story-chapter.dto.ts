export class PYStoryChapterDTO {
    title: string;
    content: string;
    media: PYStoryChapterMedia;

    constructor(title: string, content: string, media: PYStoryChapterMedia) {
        this.title = title;
        this.content = content;
        this.media = media;
    }
}

export class PYStoryChapterMedia {
    type: PYStoryChapterMediaType;
    link: string;

    constructor(type: PYStoryChapterMediaType, link: string) {
        this.type = type;
        this.link = link;
    }
}

export enum PYStoryChapterMediaType {
    gif = "gif",
    image = "image"
}