export class PYHeroPreviewDTO {
    name: string;
    image_url: string;

    constructor(name: string, image_url: string) {
        this.name = name;
        this.image_url = image_url;
    }
}