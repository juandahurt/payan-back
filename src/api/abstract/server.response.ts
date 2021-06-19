import { BaseError } from "../../error";

/**
 * Respuesta de cada endpoint
 */
export interface ServerResponse<T> {
    /**
     * True en caso de que la petición haya sido exitosa
     */
    success: boolean;
    /**
     * Mensaje de la respuesta
     */
    message?: string;
    /**
     * Datos que puede contener la respuesta
     */
    data?: T;
    /**
     * Error que puede contener la respuesta
     */
    error?: {
        id: string,
        description: string
    }
}