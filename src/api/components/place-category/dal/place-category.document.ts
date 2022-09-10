import mongoose from "mongoose";

export interface PYPlaceCategoryDocument extends mongoose.Document {
    name: string;
    code: string;
}