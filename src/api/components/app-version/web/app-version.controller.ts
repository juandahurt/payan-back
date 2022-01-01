import { BaseError } from "../../../../error";
import { ServerResponse } from "../../../abstract/server.response";
import { Helper } from "../../../helpers/helper";
import { AppVersion } from "../dal/app-version.model";
import { AppVersionService } from "../services/app-version.service";

export class AppVersionController {
    /**
     * Creates an app version
     * @param req Client request
     * @param res Server response
     */
    static async create(req: any, res: any) {
        try {
            let place = await new AppVersionService().create(req.body);
            let response: ServerResponse<AppVersion> = {
                success: true,
                message: "Versión creada exitosamente.",
                data: place
            }
            res.status(201).send(response);
        } catch (err) {
            Helper.errorHandler(res, err);
        }
    }

    /**
     * Gets the last version
     * @param req Client request
     * @param res Server response
     */
     static async last(req: any, res: any) {
        try {
            let place = await new AppVersionService().last(req.params.platform)
            let response: ServerResponse<AppVersion> = {
                success: true,
                message: "Última versión obtenida exitosamente",
                data: place
            }
            res.status(200).send(response);
        } catch (err) {
            Helper.errorHandler(res, err);
        }
    }
}