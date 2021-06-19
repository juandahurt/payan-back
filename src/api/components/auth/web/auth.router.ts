import express from "express";
import { AuthController } from "./auth.controller";

export class AuthRouter {
    router: express.Router

    constructor() {
        this.router = express.Router();
        this.setRoutes();
    }

    private setRoutes() {
        /**
         * @swagger
         * /auth/signIn:
         *   post:
         *     tags:
         *     - "auth"
         *     summary: Incio de sesión
         *     parameters:
         *     - in: body
         *       name: body
         *       description: "Credenciales del usuario"
         *       required: true
         *       schema:
         *          type: object
         *          properties:
         *            username:
         *              type: string
         *            password:
         *              type: string
         *     responses:
         *       200:
         *         description: Success
         *       401:
         *         description: Unauthorized
         */
        this.router.post('/signIn', AuthController.signIn);
    }
}