import mongoose from "mongoose";

export interface PYHeroDocument extends mongoose.Document {
    name: string;
    image_url: string;
    description: string;
}