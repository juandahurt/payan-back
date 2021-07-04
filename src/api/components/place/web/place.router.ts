import express from "express";
import { PlaceController } from "./place.controller";

export class PlaceRouter {
    router: express.Router

    constructor() {
        this.router = express.Router();
        this.setRoutes();
    }

    private setRoutes() {
        /**
         * @swagger
         * /place:
         *   get:
         *     tags:
         *     - "place"
         *     summary: Lista los lugares registrados
         *     responses:
         *       200:
         *         description: Success
         */
        this.router.get('/', PlaceController.list);

        /**
         * @swagger
         * /place:
         *   post:
         *     tags:
         *     - "place"
         *     summary: Agrega un nuevo lugar
         *     parameters:
         *     - in: body
         *       name: body
         *       description: "Lugar a ser registrado"
         *       required: true
         *       schema:
         *          type: object
         *          properties:
         *            name:
         *              type: string
         *     responses:
         *       201:
         *         description: Created
         */
        this.router.post('/', PlaceController.create);
    }
}