import mongoose from "mongoose";
import { PYFeedElementLayout } from "../models/feed-element-layout.model";
import { PYFeedSectionHeader } from "../models/feed-section-header.model";
import { PYFeedSectionLayout } from "../models/feed-section.model";

interface PYFeedSectionDocument extends mongoose.Document {
    layout: PYFeedSectionLayout;
    header: PYFeedSectionHeader;
    elementLayout: PYFeedElementLayout;
    elementType: string;
}

const PYFeedSectionSchema = new mongoose.Schema({
    layout: { 
        type: String,
        required: true 
    },
    header: {
        type: Object,
        required: true
    },
    elementLayout: {
        type: Object,
        required: true
    },
    elementType: {
        type: String
    }
}, { collection: 'PYFeedSection' });

export default mongoose.model<PYFeedSectionDocument>("PYFeedSection", PYFeedSectionSchema);