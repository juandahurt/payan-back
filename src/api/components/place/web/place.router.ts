import express from "express";
import { PYPlaceController } from "./place.controller";

export class PYPlaceRouter {
    controller = new PYPlaceController()
    router = express.Router();

    constructor() {
        this.router.get("/", this.controller.getPlace);
        this.router.get("/locations", this.controller.getPlacesLocations);
    }
}