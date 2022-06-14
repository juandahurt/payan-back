import mongoose from "mongoose";
import { PYHeroDocument } from "./hero.document";

const PYHeroSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image_url: {
        type: String
    },
    description: {
        type: String
    }
}, { collection: 'PYHero' });

export default mongoose.model<PYHeroDocument>("PYHero", PYHeroSchema);