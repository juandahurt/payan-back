import express from "express";
import { FactController } from "./fact.controller";

export class FactRouter {
    router: express.Router

    constructor() {
        this.router = express.Router();
        this.setRoutes();
    }

    private setRoutes() {
        /**
         * @swagger
         * /fact:
         *   get:
         *     tags:
         *     - "fact"
         *     summary: Obtiene un hecho aleatorio
         *     responses:
         *       200:
         *         description: Success
         */
        this.router.get('/', FactController.get);
    }
}