import { PYPlaceLocation } from "../interface/place-location.interface";
import { PYPlaceImage } from "../interface/place-image.interface";

export class PYPlaceDTO {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    location: PYPlaceLocation;
    images: PYPlaceImage[];

    constructor(image: string, title: string, subtitle: string, description: string, location: PYPlaceLocation, images: PYPlaceImage[]) {
        this.image = image;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.location = location;
        this.images = images;
    }
}