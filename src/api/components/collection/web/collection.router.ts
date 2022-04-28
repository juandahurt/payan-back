import express from "express";
import { PYCollectionController } from "./collection.controller";

export class PYCollectionRouter {
    controller = new PYCollectionController();
    router = express.Router();

    constructor() {
        this.router.use("/", this.controller.getCollectionByTypeId);
    }
}