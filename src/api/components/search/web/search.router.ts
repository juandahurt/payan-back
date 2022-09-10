import express from "express";
import { SearchController } from "./search.controller";

export class SearchRouter {
    controller = new SearchController()
    router = express.Router();

    constructor() {
        this.router.use("/", this.controller.search);
    }
}