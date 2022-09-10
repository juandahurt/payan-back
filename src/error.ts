export interface AppError extends Error {
    id: string;
    httpCode: number; 
}

export class PYError implements AppError {
    /**
     * Error identifier.
     */
    id: string;

    /**
     * Error name.
     */
    name: string;

    /**
     * Error message.
     */
    message: string;

    /**
     * HTTP code associated with the error.
     */
    httpCode: number;

    constructor(id: string, name: string, message: string, httpCode: number) {
        Error.call(this);
        Error.captureStackTrace(this);

        this.id = id;
        this.message = message;
        this.name = name;
        this.httpCode = httpCode;
    }
}