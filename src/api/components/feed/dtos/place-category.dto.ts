export class PYPlaceCategoryDTO {
    image_url: string;
    title: string;
    numberOfPlaces: number;

    constructor(image_url: string, title: string, numberOfPlaces: number) {
        this.image_url = image_url;
        this.title = title;
        this.numberOfPlaces = numberOfPlaces;
    }
}