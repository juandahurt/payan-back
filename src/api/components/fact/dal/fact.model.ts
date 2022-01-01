import mongoose from 'mongoose';

export interface Fact extends mongoose.Document {
    /**
     * Descripción del dato
     */
    description: string;
}


const factSchema = new mongoose.Schema({
    description: { type: String, required: true }
}, { collection: 'Fact' });

export default mongoose.model<Fact>('Fact', factSchema);