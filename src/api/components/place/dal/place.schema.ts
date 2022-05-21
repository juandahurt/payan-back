import mongoose from "mongoose";
import { PYPlaceDocument } from "./place.document";

const PYPlaceSchema = new mongoose.Schema({
    title_key: {
        type: String
    },
    image_url: {
        type: String
    },
    category_code: {
        type: String
    }
}, { collection: 'PYPlace' });

export default mongoose.model<PYPlaceDocument>("PYPlace", PYPlaceSchema);