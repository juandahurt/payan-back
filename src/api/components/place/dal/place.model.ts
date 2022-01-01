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

export class GroupedCategory {
    private category: PlaceCategory;
    private places: Place[];

    constructor(category: PlaceCategory, places: Place[]) {
        this.category = category;
        this.places = places;
    }
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