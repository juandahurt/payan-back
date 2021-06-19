/**
 * Respuesta de cada endpoint
 */
export interface ServerResponse<T> {
    /**
     * True en caso de que la petición haya sido exitosa
     */
    success: boolean;
    /**
     * Titulo de la respuesta
     */
    title: string;
    /**
     * Descripción de la respuesta
     */
    description: string;
    /**
     * Datos que contiene la respuesta
     */
    data?: T;
}