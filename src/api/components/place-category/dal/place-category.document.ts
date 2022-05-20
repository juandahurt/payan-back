import mongoose from "mongoose";

export interface PYPlaceCategoryDocument extends mongoose.Document {
    name_key: string;
    code: string;
}