import { AppError, BaseError } from "../../../../error";
import { ServerResponse } from "../../../abstract/server.response";
import { Helper } from "../../../helpers/helper";
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
                message: "Has iniciado sesión exitosamente.",
                data: token
            }
            res.status(200).send(response);
        } catch (err) {
            Helper.errorHandler(res, err);
        }
    }
}