import { PYError } from "../../../../error";
import { ServerResponse } from "../../../abstract/server.response";
import { PYUnknownError } from "../../../common/errors/server.errors";
import { PYPlaceDTO } from "../dtos/place.dto";
import { PYPlaceService } from "../services/place.service";

export class PYPlaceController {
    async getPlace(req: any, res: any) {
        let service = new PYPlaceService();
        let placeId = req.query.id;
        
        try {
            let place = await service.getPlace(placeId);
            let response: ServerResponse<PYPlaceDTO> = {
                success: true,
                data: place
            }
            res.status(200).send(response);   
        } catch (e) {
            if (e instanceof PYError) {
                let response: ServerResponse<null> = {
                    success: false,
                    error: e
                }
                res.status(e.httpCode).send(response);
            } else {
                let error = new PYUnknownError();
                let response: ServerResponse<null> = {
                    success: false,
                    error: error
                }
                res.status(error.httpCode).send(response);
            }
        }
    }
}