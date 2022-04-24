import express from "express";
import { PYFeedController } from "./feed.controller";

export class PYFeedRouter {
    controller = new PYFeedController();
    router = express.Router();

    constructor() {
        this.router.use("/", this.controller.getFeed);
    }
}