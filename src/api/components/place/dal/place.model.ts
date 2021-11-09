import mongoose from 'mongoose';


export interface Place extends mongoose.Document {
    name: string;
    image: string;
    category: PlaceCategory;
}

export enum PlaceCategory {
    museum = "MUSEUM",
    park = "PARK",
    bridge = "BRIDGE",
    church = "CHURCH"
}

const placeSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    category: { 
        type: String,
        required: true
    }
}, { collection: 'Place' });

export default mongoose.model<Place>('Place', placeSchema);