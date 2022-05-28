export class PYPlaceDTO {
    image: string;
    title: string;
    subtitle: string;
    description: string;

    constructor(image: string, title: string, subtitle: string, description: string) {
        this.image = image;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
    }
}