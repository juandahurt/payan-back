import { db } from './config/database';
import mongoose from 'mongoose';


/**
 * Opens the Mongoose connection.
 */
export const connectToDB = async () => {
    await mongoose.connect(db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
}

/**
 * Closes the Mongoose connection.
 */
export const disconnectDB = async () => {
    await mongoose.connection.close();
}