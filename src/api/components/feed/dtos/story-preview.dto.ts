export class PYStoryPreviewDTO {
    link: string;
    title: string;
    image: string;
    hash: string;

    constructor(link: string, title: string, image: string, hash: string) {
        this.link = link;
        this.title = title;
        this.image = image;
        this.hash = hash;
    }
}