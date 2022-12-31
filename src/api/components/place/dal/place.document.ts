import mongoose from "mongoose";
import { PYPlaceImage } from "../interface/place-image.interface";
import { PYPlaceLocation } from "../interface/place-location.interface";

export interface PYPlaceDocument extends mongoose.Document {
    code: string;
    isVisible: boolean;
    title: string;
    image_url: string;
    description: string;
    subtitle?: string;
    location: PYPlaceLocation;
    images?: PYPlaceImage[];
}