export class PYStoryPreviewDTO {
    id: string;
    title: string;
    image: string;

    constructor(id: string, title: string, image: string) {
        this.id = id;
        this.title = title;
        this.image = image;
    }
}