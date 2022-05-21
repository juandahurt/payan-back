import mongoose from "mongoose";

export interface PYPlaceDocument extends mongoose.Document {
    title_key: string;
    image_url: string;
    description_key: string;
}