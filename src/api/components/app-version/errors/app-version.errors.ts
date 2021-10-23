import { BaseError } from "../../../../error"

export class AppVersionError extends BaseError {
    constructor(id: string, description: string, httpCode: number) {
        super(id, "AppVersionError", description, httpCode)
    }

    static numberAlreadyUsed = new AppVersionError(
        "VER-01", 
        "El número de versión no se encuentra disponible", 
        400
    );
}