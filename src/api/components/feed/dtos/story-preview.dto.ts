export class PYStoryPreviewDTO {
    link: string;
    title: string;
    image: string;

    constructor(link: string, title: string, image: string) {
        this.link = link;
        this.title = title;
        this.image = image;
    }
}