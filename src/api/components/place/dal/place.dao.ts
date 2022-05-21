import { PYPlaceDataAccessLogic } from "../interface/place-data-access-logic.interface";
import { PYPlaceDocument } from "./place.document";
import placeSchema from "./place.schema";

export class PYPlaceDAO implements PYPlaceDataAccessLogic {
    async listPlacesByCategory(category_code: string): Promise<PYPlaceDocument[]> {
        let places = await placeSchema.find({
            category_code: category_code
        });
        return places;
    }
}