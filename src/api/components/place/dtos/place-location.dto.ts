import { PYPlaceLocation } from "../interface/place-location.interface";

export class PYPlaceLocationDTO {
    title: string;
    location: PYPlaceLocation;

    constructor(title: string, location: PYPlaceLocation) {
        this.title = title;
        this.location = location;
    }
}