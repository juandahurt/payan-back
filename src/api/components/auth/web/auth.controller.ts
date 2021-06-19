import { AppError, BaseError } from "../../../../error";
import { ServerResponse } from "../../../abstract/server.response";
import { AuthService } from "../services/auth.service";

export class AuthController {
    /**
     * Lists all the historic places
     * @param req Client request
     * @param res Server response
     */
     static async signIn(req: any, res: any) {
        try {
            let token = await new AuthService().signIn(req.body)
            let response: ServerResponse<String> = {
                success: true,
                title: "Bienvenido",
                description: "Has iniciado sesión exitosamente.",
                data: token
            }
            res.status(200).send(response);
        } catch (err) {
            if (err instanceof BaseError) {
                let response: ServerResponse<null> = {
                    success: false,
                    title: "Error",
                    description: err.description,
                }
                res.status(err.httpCode).send(response);
            } else {
                let response: ServerResponse<AppError> = {
                    success: false,
                    title: "Ups",
                    description: "Ha ocurrido un error desconocido..."
                }
                res.status(500).send(response);
                console.log(err.message);
            }
        }
    }
}