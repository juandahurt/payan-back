import mongoose from "mongoose";
import { PYHeroSection } from "../interfaces/hero-section.interface";

export interface PYHeroDocument extends mongoose.Document {
    isVisible: boolean;
    name: string;
    image_url: string;
    description: string;
    bornAt: string;
    diedAt: string;
    sections: PYHeroSection[]
}