import express from "express";
import { PYHeroController } from "./hero.controller";

export class PYHeroRouter {
    controller = new PYHeroController();
    router = express.Router();

    constructor() {
        this.router.use("/", this.controller.getHero);
    }
}