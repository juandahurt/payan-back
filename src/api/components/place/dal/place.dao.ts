import { Types } from "mongoose";
import { PYPlaceDataAccessLogic } from "../interface/place-data-access-logic.interface";
import { PYPlaceDocument } from "./place.document";
import placeSchema from "./place.schema";

export class PYPlaceDAO implements PYPlaceDataAccessLogic {
    async getPlace(id: string): Promise<PYPlaceDocument | null> {
        let place = await placeSchema.findById(Types.ObjectId(id));
        return place;
    }

    async listPlacesByCategory(category_id: string): Promise<PYPlaceDocument[]> {
        let places = await placeSchema.find({
            category_id: Types.ObjectId(category_id)
        });
        return places;
    }

    async getPlacesLocations(): Promise<PYPlaceDocument[]> {
        return await placeSchema.find({});
    }
}