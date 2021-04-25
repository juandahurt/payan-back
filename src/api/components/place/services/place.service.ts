import { PlaceDAO } from "../dal/place.dao";
import { Place } from "../dal/place.model";

export class PlaceService {
    /**
     * Lists all the historic places
     */
     public async list(): Promise<Place[]> {
        return new PlaceDAO().list();
        // context.data
        // let examDAO = new ExamDAO();
        // return await examDAO.listByDirector(context.directorID);
    }
}