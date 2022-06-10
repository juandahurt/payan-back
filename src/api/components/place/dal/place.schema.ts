import mongoose from "mongoose";
import { PYPlaceDocument } from "./place.document";

const PYPlaceSchema = new mongoose.Schema({
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