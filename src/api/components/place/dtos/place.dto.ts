import { PYPlaceLocation } from "../interface/place-location.interface";

export class PYPlaceDTO {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    location: PYPlaceLocation;

    constructor(image: string, title: string, subtitle: string, description: string, location: PYPlaceLocation) {
        this.image = image;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.location = location;
    }
}