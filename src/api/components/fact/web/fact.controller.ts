import { Fact } from "../dal/fact.model";
import { FactService } from "../services/fact.service";
import { ServerResponse } from "../../../abstract/server.response";

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
            let response: ServerResponse<null> = {
                success: false,
                error: {
                    id: "NA-01",
                    description: "Ha ocurrido un error desconocido"
                }
            }
            res.status(500).send(response);
            console.log(err.message);
        }
    }
}