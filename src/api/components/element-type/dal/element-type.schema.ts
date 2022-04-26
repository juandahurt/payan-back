import mongoose, { Schema, Types } from "mongoose";
import { PYLocalizableString } from "../../../abstract/localizable-string.interface";

export interface PYElementTypeDocument extends mongoose.Document {
    _id: string;
    name: PYLocalizableString;
    parent?: string;
}

const PYElementTypeSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: Object,
        required: true
    },
    parent: {
        type: String
    }
}, { collection: 'PYElementType' });

export default mongoose.model<PYElementTypeDocument>("PYElementType", PYElementTypeSchema);