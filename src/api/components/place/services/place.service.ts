import { PYPlaceDAO } from "../dal/place.dao";
import { PYPlaceDTO } from "../dtos/place.dto";
import { PYPlaceBusinessLogic } from "../interface/place-business-logic.interface";
import { PYPlaceDataAccessLogic } from "../interface/place-data-access-logic.interface";

export class PYPlaceService implements PYPlaceBusinessLogic {
    placeDAO: PYPlaceDataAccessLogic;

    constructor(placeDAO: PYPlaceDataAccessLogic = new PYPlaceDAO()) {
        this.placeDAO = placeDAO;
    }

    async getPlace(id: string): Promise<PYPlaceDTO> {
        let rawPlace = await this.placeDAO.getPlace(id);
        return new PYPlaceDTO(
            rawPlace?.image_url ?? "",
            rawPlace?.title ?? "",
            rawPlace?.subtitle ?? "",
            rawPlace?.description ?? "",
            rawPlace?.location ?? { lat: 0, lon: 0 }
        );
    }
}