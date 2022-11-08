import { PYPlaceLocation } from "../interface/place-location.interface";

export class PYPlaceLocationDTO {
    title: string;
    location: PYPlaceLocation;
    link: string;

    constructor(title: string, location: PYPlaceLocation, link: string) {
        this.title = title;
        this.location = location;
        this.link = link;
    }
}