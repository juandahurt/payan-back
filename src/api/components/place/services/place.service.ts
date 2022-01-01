import { PlaceDAO } from "../dal/place.dao";
import { GroupedCategory, Place, PlaceCategory } from "../dal/place.model";

export class PlaceService {
    public async create(place: Place): Promise<Place> {
        return new PlaceDAO().create(place);
    }

    public async list(): Promise<Place[]> {
        return new PlaceDAO().list();
    }

    public async listByCategory(): Promise<GroupedCategory[]> {
        let dao = new PlaceDAO();
        let categories = Object.values(PlaceCategory);
        let groupedPlaces: GroupedCategory[] = [];

        for (let cat of categories) {
            let places = await dao.listByCategory(cat);
            console.log(places.length);
            let group = new GroupedCategory(cat, places);
            groupedPlaces.push(group);
        }

        return groupedPlaces;
    }
}