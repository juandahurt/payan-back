export interface AppError extends Error {
    id: number; 
    description: string; 
    httpCode?: number; 
}

export class BaseError implements AppError {
    id: number;
    description: string;
    httpCode: number;
    name: string;
    message: string;
    stack?: string | undefined;

    constructor(id: number, name: string, description: string, httpCode: number) {
        Error.call(this);
        Error.captureStackTrace(this);
        this.id = id;
        this.name = name
        this.message = description;
        this.description = description;
        this.httpCode = httpCode;
    }
}