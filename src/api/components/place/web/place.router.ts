import express from "express";
import { PYPlaceController } from "./place.controller";

export class PYPlaceRouter {
    controller = new PYPlaceController()
    router = express.Router();

    constructor() {
        this.router.use("/", this.controller.getPlace);
    }
}