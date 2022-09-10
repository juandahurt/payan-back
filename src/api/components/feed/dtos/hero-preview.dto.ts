export class PYHeroPreviewDTO {
    name: string;
    image_url: string;
    deeplink: string;
    description: string;

    constructor(name: string, image_url: string, deeplink: string, description: string) {
        this.name = name;
        this.image_url = image_url;
        this.deeplink = deeplink;
        this.description = description;
    }
}