export class PYCollectionItemDTO {
    title: string;
    image_url: string;
    deepLink: string;

    constructor(title: string, image_url: string, deepLink: string) {
        this.title = title;
        this.image_url = image_url;
        this.deepLink = deepLink;
    }
}