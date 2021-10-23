import mongoose from 'mongoose';

export interface AppVersion extends mongoose.Document {
    number: string;
    image: string;
}

export enum AppVersionType {
    optional = 0,
    mandatory = 1
}

const appVersionSchema = new mongoose.Schema({
    number: { type: String, required: true },
    type: { type: AppVersionType, required: true }
}, { collection: 'AppVersion' });

export default mongoose.model<AppVersion>('AppVersion', appVersionSchema);