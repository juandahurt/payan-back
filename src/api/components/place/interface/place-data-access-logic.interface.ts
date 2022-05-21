import { PYPlaceDocument } from "../dal/place.document";

export interface PYPlaceDataAccessLogic {
    listPlacesByCategory(category_code: string): Promise<PYPlaceDocument[]>
}