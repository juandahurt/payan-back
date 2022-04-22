import mongoose from "mongoose";

interface PYElementDocument extends mongoose.Document {
    _id: string;
    title: string;
    subtitle?: string;
    image: string;
    description: string;
    type: string;
    subtype?: string;
}

const PYElementSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    title: { 
        type: String,
        required: true 
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: false
    }
}, { collection: 'PYElement' });

export default mongoose.model<PYElementDocument>("PYElement", PYElementSchema);