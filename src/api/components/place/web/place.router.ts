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
         *     parameters:
         *     - in: query
         *       name: group
         *       description: Indica si los lugares deben ser agrupados por categorías
         *       required: false
         *       type: integer
         *       enum: [0, 1]
         *     
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
         *            category:
         *              type: string
         *     responses:
         *       201:
         *         description: Created
         */
        this.router.post('/', PlaceController.create);
    }
}