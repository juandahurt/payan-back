import mongoose from 'mongoose';

/**
 *  Place
 */
export interface Place extends mongoose.Document {
    /**
     * Name of the historical place
     */
    name: string;

    /**
     * Base 64 representation of the image
     */
    image: string;
}

/**
 *  
 */
export enum PlaceType {
    historical,
    museum
}

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { collection: 'Place' });

export default mongoose.model<Place>('Place', placeSchema);