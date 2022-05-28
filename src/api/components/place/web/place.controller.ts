import { ServerResponse } from "../../../abstract/server.response";
import { PYPlaceDTO } from "../dtos/place.dto";
import { PYPlaceService } from "../services/place.service";

export class PYPlaceController {
    async getPlace(req: any, res: any) {
        let service = new PYPlaceService();
        let placeId = req.query.id;
        let place = await service.getPlace(placeId);
        let response: ServerResponse<PYPlaceDTO> = {
            success: true,
            data: place
        }
        res.status(200).send(response);
    }
}