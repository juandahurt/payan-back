import { BaseError } from "../../../../error"

export class AuthError extends BaseError {
    constructor(id: number, description: string, httpCode: number) {
        super(id, "AuthError", description, httpCode)
    }

    static invalidCredential = new AuthError(
        1001, 
        "Usuario y/o contraseña incorrectos", 
        401
    );
}