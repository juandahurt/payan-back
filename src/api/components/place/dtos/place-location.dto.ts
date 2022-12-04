import { PYPlaceLocation } from "../interface/place-location.interface";

export class PYPlaceLocationDTO {
    title: string;
    imageUrl: string;
    location: PYPlaceLocation;
    link: string;

    constructor(title: string, imageUrl: string, location: PYPlaceLocation, link: string) {
        this.title = title;
        this.imageUrl =imageUrl;
        this.location = location;
        this.link = link;
    }
}