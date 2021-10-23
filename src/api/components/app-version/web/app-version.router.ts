import express from "express";
import { AppVersionController } from "./app-version.controller";

export class AppVersionRouter {
    router: express.Router

    constructor() {
        this.router = express.Router();
        this.setRoutes();
    }

    private setRoutes() {
        /**
         * @swagger
         * /app-version:
         *   post:
         *     tags:
         *     - "version"
         *     summary: Adición de nueva versión
         *     parameters:
         *     - in: body
         *       name: body
         *       description: "Información de la versión"
         *       required: true
         *       schema:
         *          type: object
         *          properties:
         *            number:
         *              type: string
         *            type:
         *              type: number
         *     responses:
         *       201:
         *         description: Success
         */
        this.router.post('/', AppVersionController.create);

        /**
         * @swagger
         * /app-version/{platform}:
         *   get:
         *     tags:
         *     - "version"
         *     summary: Obtiene la última versión
         *     parameters:
         *     - in: path
         *       name: platform
         *       description: "Plataforma"
         *       required: true
         *       schema:
         *         type: string
         *     responses:
         *       200:
         *         description: Success
         */
         this.router.get('/:platform', AppVersionController.last);
    }
}