import { Types } from "mongoose";
import { PYPlaceDataAccessLogic } from "../interface/place-data-access-logic.interface";
import { PYPlaceDocument } from "./place.document";
import placeSchema from "./place.schema";

export class PYPlaceDAO implements PYPlaceDataAccessLogic {
    async listPlacesByCategory(category_id: string): Promise<PYPlaceDocument[]> {
        let places = await placeSchema.find({
            category_id: Types.ObjectId(category_id)
        });
        return places;
    }
}