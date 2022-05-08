export class PYCollectionElementDTO {
    title: string;
    image: string;
    deeplink: string;

    constructor(title: string, image: string, deeplink: string) {
        this.title = title;
        this.image = image;
        this.deeplink = deeplink;
    }
}