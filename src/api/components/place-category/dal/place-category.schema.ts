import mongoose from "mongoose";
import { PYPlaceCategoryDocument } from "./place-category.document";

const PYPlaceCategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    code: {
        type: String
    }
}, { collection: 'PYPlaceCategory' });

export default mongoose.model<PYPlaceCategoryDocument>("PYPlaceCategory", PYPlaceCategorySchema);