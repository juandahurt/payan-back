import mongoose from 'mongoose';

/**
 * Historic place
 */
export interface Place extends mongoose.Document {
    /**
     * Name of the Historic place
     */
    name: string
}

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { collection: 'Place' });

export default mongoose.model<Place>('Place', placeSchema);