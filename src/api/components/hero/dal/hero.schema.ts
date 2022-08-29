import mongoose from "mongoose";
import { PYHeroDocument } from "./hero.document";

const PYHeroSchema = new mongoose.Schema({
    isVisible: {
        type: Boolean
    },
    name: {
        type: String
    },
    image_url: {
        type: String
    },
    description: {
        type: String
    },
    diedAt: {
        type: String
    },
    bornAt: {
        type: String
    },
    sections: {
        type: Array
    }
}, { collection: 'PYHero' });

export default mongoose.model<PYHeroDocument>("PYHero", PYHeroSchema);