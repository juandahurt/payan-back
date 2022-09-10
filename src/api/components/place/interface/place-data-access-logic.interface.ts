import { PYPlaceDocument } from "../dal/place.document";

export interface PYPlaceDataAccessLogic {
    getPlace(id: string): Promise<PYPlaceDocument | null>
    listPlacesByCategory(category_id: string): Promise<PYPlaceDocument[]>
}