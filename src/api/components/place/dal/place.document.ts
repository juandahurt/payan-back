import mongoose from "mongoose";
import { PYPlaceLocation } from "../interface/place-location.interface";

export interface PYPlaceDocument extends mongoose.Document {
    title: string;
    image_url: string;
    description: string;
    subtitle: string;
    location: PYPlaceLocation;
}