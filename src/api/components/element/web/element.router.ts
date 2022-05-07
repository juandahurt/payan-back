import express from "express";
import { PYElementController } from "./element.controller";

export class PYElementRouter {
    controller = new PYElementController();
    router = express.Router();

    constructor() {
        this.router.use("/", this.controller.getElement);
    }
}