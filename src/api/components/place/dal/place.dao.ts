import { connectToDB, disconnectDB } from "../../../../mongoose";
import PlaceModel, { Place } from './place.model';

export class PlaceDAO {
    /**
     * Lists all the historic places from the DB.
     */
     async create(place: Place): Promise<Place> {
        await connectToDB();
        let placeCreated = await PlaceModel.create(place);
        await disconnectDB();
        return placeCreated;
    }

    /**
     * Lists all the historic places from the DB.
     */
     async list(): Promise<Place[]> {
        await connectToDB();
        let places = await PlaceModel.find();
        await disconnectDB();
        return places;
    }
}