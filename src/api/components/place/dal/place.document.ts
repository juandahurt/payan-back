import mongoose from "mongoose";

export interface PYPlaceDocument extends mongoose.Document {
    title: string;
    image_url: string;
    description: string;
    subtitle: string;
}