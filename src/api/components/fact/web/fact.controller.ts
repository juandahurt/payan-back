import { Fact } from "../dal/fact.model";
import { FactService } from "../services/fact.service";
import { ServerResponse } from "../../../abstract/server.response";
import { Helper } from "../../../helpers/helper";

export class FactController {
    /**
     * Obtiene un dato aleatorio
     * @param req Client request
     * @param res Server response
     */
     static async get(req: any, res: any) {
        try {
            let fact = await new FactService().get();
            let response: ServerResponse<Fact> = {
                success: true,
                message: "Se ha obtenido un dato exitosamente.",
                data: fact
            }
            res.status(200).send(response);
        } catch (err) {
            Helper.errorHandler(res, err);
        }
    }
}