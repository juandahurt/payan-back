import mongoose from "mongoose";
import { PYPlaceDocument } from "./place.document";

let PYPlaceSchema = new mongoose.Schema({
    isVisible: {
        type: Boolean
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    image_url: {
        type: String
    },
    description: {
        type: String
    },
    category_code: {
        type: String
    },
    location: {
        type: Object
    },
    images: {
        type: Array
    }
}, { collection: 'PYPlace' });

export default mongoose.model<PYPlaceDocument>("PYPlace", PYPlaceSchema);