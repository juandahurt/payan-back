import { BaseError } from "../../../../error"

export class AuthError extends BaseError {
    constructor(id: string, description: string, httpCode: number) {
        super(id, "AuthError", description, httpCode)
    }

    static invalidCredential = new AuthError(
        "AUT-01", 
        "Usuario y/o contraseña incorrectos", 
        401
    );
}