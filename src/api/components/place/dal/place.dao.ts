import { connectToDB, disconnectDB } from "../../../../mongoose";
import PlaceModel, { Place, PlaceCategory } from './place.model';

export class PlaceDAO {
    async create(place: Place): Promise<Place> {
        await connectToDB();
        let placeCreated = await PlaceModel.create(place);
        await disconnectDB();
        return placeCreated;
    }

    async list(): Promise<Place[]> {
        await connectToDB();
        let places = await PlaceModel.find();
        await disconnectDB();
        return places;
    }

    async listByCategory(category: PlaceCategory): Promise<Place[]> {
        let places = await PlaceModel.find({ category: category });
        return places;
    }
}