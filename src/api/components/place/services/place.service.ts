import { PYPlaceDAO } from "../dal/place.dao";
import { PYPlaceDTO } from "../dtos/place.dto";
import { PYPlaceBusinessLogic } from "../interface/place-business-logic.interface";
import { PYPlaceDataAccessLogic } from "../interface/place-data-access-logic.interface";
import { PYPlaceNotFoundError } from "../errors/place.errors";
import { PYPlaceLocationDTO } from "../dtos/place-location.dto";

export class PYPlaceService implements PYPlaceBusinessLogic {
    placeDAO: PYPlaceDataAccessLogic;

    constructor(placeDAO: PYPlaceDataAccessLogic = new PYPlaceDAO()) {
        this.placeDAO = placeDAO;
    }

    async getPlace(id: string): Promise<PYPlaceDTO> {
        let placeDocument = await this.placeDAO.getPlace(id);
        if (placeDocument == null) {
            throw new PYPlaceNotFoundError();
        }
        
        let rawPlace = placeDocument!;
        return new PYPlaceDTO(
            rawPlace.image_url,
            rawPlace.title,
            rawPlace.subtitle ?? "",
            rawPlace.description ?? "",
            rawPlace.location ?? { lat: 0, lon: 0 },
            rawPlace.images ?? []
        );
    }

    async getPlacesLocations(): Promise<PYPlaceLocationDTO[]> {
        let rawPlaces = await this.placeDAO.getPlacesLocations();
        rawPlaces = rawPlaces.filter((p) => { 
            return p.location.lat != 0 && p.location.lon != 0
        });
        return rawPlaces.map((p) => {
            return new PYPlaceLocationDTO(
                p.title,
                p.location,
                "payan://place?id=" + p.id
            );
        });
    }
}