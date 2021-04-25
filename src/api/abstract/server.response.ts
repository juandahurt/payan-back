/**
 * Response of every endpoint
 */
export interface ServerResponse<T> {
    /**
     * True if the server excecuted 
     */
    success: boolean;
    /**
     * Title of the response
     */
    title: string;
    /**
     * Description of the response
     */
    description: string;
    /**
     * Data contained in the response
     */
    data: T;
}