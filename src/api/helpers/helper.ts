import { BaseError } from "../../error";
import { ServerResponse } from "../abstract/server.response";

export class Helper {
    static async randomDocument(model: any) {
        let count = await model.countDocuments();
        let rand = Math.floor(Math.random() * count);
        return await model.findOne().skip(rand);
    }

    static async errorHandler(res: any, err: any) {
        if (err instanceof BaseError) {
            let response: ServerResponse<null> = {
                success: false,
                error: {
                    id: err.id,
                    description: err.description
                }
            }
            res.status(err.httpCode).send(response);
        } else {
            console.log(err);
            let response: ServerResponse<null> = {
                success: false,
                error: {
                    id: BaseError.unexpectedError.id,
                    description: BaseError.unexpectedError.description
                }
            }
            res.status(500).send(response);
        }
    }
}