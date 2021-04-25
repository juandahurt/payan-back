import express from "express";
import { PlaceController } from "./place.controller";

export class PlaceRouter {
    router: express.Router

    constructor() {
        this.router = express.Router();
        this.setRoutes();
    }

    private setRoutes() {
        this.router.get('/', PlaceController.list);
    }
}