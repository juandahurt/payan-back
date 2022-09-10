export class PYPlaceCategoryDTO {
    image_url: string;
    title: string;
    numberOfPlaces: number;
    deeplink: string;

    constructor(image_url: string, title: string, numberOfPlaces: number, deeplink: string) {
        this.image_url = image_url;
        this.title = title;
        this.numberOfPlaces = numberOfPlaces;
        this.deeplink = deeplink;
    }
}