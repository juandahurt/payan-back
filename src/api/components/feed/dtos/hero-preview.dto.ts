export class PYHeroPreviewDTO {
    name: string;
    image_url: string;
    deeplink: string;

    constructor(name: string, image_url: string, deeplink: string) {
        this.name = name;
        this.image_url = image_url;
        this.deeplink = deeplink;
    }
}