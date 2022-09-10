import { PYError } from "../../error";

/**
 * Server response for every endpoint.
 */
export interface ServerResponse<T> {
    /**
     * True if the request was successful.
     */
    success: boolean;
    
    /**
     * Possible data associated with the response. Only if it was successful!
     */
    data?: T;

    /**
     * Error that may occur.
     */
    error?: PYError;
}