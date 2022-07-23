import express from "express";
import { PYStoryController } from "./story.controller";
export class PYStoryRouter {
    controller = new PYStoryController()
    router = express.Router();

    constructor() {
        this.router.use("/", this.controller.get);
    }
}