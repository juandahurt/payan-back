export class PYStoryPreviewDTO {
    id: string;
    link: string;
    title: string;
    image: string;
    hash: string;

    constructor(id: string, link: string, title: string, image: string, hash: string) {
        this.id = id;
        this.link = link;
        this.title = title;
        this.image = image;
        this.hash = hash;
    }
}