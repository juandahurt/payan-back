import { PYPlaceDocument } from "../dal/place.document";

export interface PYPlaceDataAccessLogic {
    listPlacesByCategory(category_id: string): Promise<PYPlaceDocument[]>
}