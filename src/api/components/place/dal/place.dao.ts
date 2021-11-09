import { connectToDB, disconnectDB } from "../../../../mongoose";
import PlaceModel, { Place, PlaceCategory } from './place.model';

export class PlaceDAO {
    async create(place: Place): Promise<Place> {
        let placeCreated = await PlaceModel.create(place);
        return placeCreated;
    }

    async list(): Promise<Place[]> {
        let places = await PlaceModel.find();
        return places;
    }

    async listByCategory(category: PlaceCategory): Promise<Place[]> {
        let places = await PlaceModel.find({ category: category });
        return places;
    }
}