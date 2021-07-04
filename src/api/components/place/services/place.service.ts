import { PlaceDAO } from "../dal/place.dao";
import { Place } from "../dal/place.model";

export class PlaceService {
    /**
     * Creates a place
     * @param place Contains the info of the new place
     */
     public async create(place: Place): Promise<Place> {
        return new PlaceDAO().create(place);
    }

    /**
     * Lists all the places
     */
     public async list(): Promise<Place[]> {
        return new PlaceDAO().list();
    }
}