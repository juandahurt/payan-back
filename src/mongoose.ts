import { db } from './config/database';
import mongoose from 'mongoose';


/**
 * Opens the Mongoose connection.
 */
export const connectToDB = async () => {
    try {
        await mongoose.connect(db.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (err) {
        process.exit();
    }
}

/**
 * Closes the Mongoose connection.
 */
export const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
    } catch (err) {
        process.exit();
    }
}