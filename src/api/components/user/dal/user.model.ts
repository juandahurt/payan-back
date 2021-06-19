import mongoose from 'mongoose';

/**
 * Usuario de la aplicación
 */
export interface User extends mongoose.Document {
    /**
     * Nombres del usuario
     */
    name: string;

    /**
     * Apellidos del usuario
     */
    lastName: string;

    /**
     * username del usuario
     */
    username: string;

    /**
     * Contraseña ingresada por el usuario
     */
    password: string | null;
}

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { collection: 'User' });

export default mongoose.model<User>('User', placeSchema);