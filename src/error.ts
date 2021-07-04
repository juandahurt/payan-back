export interface AppError extends Error {
    id: string; 
    description: string; 
    httpCode?: number; 
}

export class BaseError implements AppError {
    id: string;
    description: string;
    httpCode: number;
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(id: string, name: string, description: string, httpCode: number) {
        Error.call(this);
        Error.captureStackTrace(this);
        this.id = id;
        this.name = name
        this.message = description;
        this.description = description;
        this.httpCode = httpCode;
    }
}