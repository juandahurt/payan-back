export class PYCollectionItemDTO {
    title: string;
    subtitle: string;
    image_url: string;
    deepLink: string;

    constructor(title: string, subtitle: string, image_url: string, deepLink: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.image_url = image_url;
        this.deepLink = deepLink;
    }
}