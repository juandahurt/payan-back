import { GroupedCategory, Place } from "../dal/place.model";
import { PlaceService } from "../services/place.service";
import { ServerResponse } from "../../../abstract/server.response";
import { Helper } from "../../../helpers/helper";
import placeSchema from "./place.schema";
import { PlaceError } from "../errors/place.errors";

export class PlaceController {
    /**
     * Lists all the places
     * @param req Client request
     * @param res Server response
     */
     static async list(req: any, res: any) {
        try {
            let group = req.query.group
            let service = new PlaceService();

            if (group == 1) {
                let groups = await service.listByCategory();
                let response: ServerResponse<GroupedCategory[]> = {
                    success: true,
                    message: "Los lugares listados exitosamente.",
                    data: groups
                }
                res.status(200).send(response);
            } else {
                let places = await service.list();
                let response: ServerResponse<Place[]> = {
                    success: true,
                    message: "Los lugares listados exitosamente.",
                    data: places
                }
                res.status(200).send(response);
            }
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * Creates a historical places
     * @param req Client request
     * @param res Server response
     */
    static async create(req: any, res: any) {
        try {
            let { error, value } = placeSchema.validate(req.body);
            
            if (error) {
                PlaceError.throwErrorIdentifiedBy(error.message);
            } else {
                let place = await new PlaceService().create(value);
                let response: ServerResponse<Place> = {
                    success: true,
                    message: "Lugar creado exitosamente.",
                    data: place
                }
                res.status(201).send(response);
            }
        } catch (err) {
            Helper.errorHandler(res, err);
        }
    }
}