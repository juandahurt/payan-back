import { BaseError } from "../../../../error"

export class PlaceError extends BaseError {
    constructor(id: string, description: string, httpCode: number) {
        super(id, "AuthError", description, httpCode)
    }

    static noNameProvided = new PlaceError(
        "PLA-01", 
        "Se debe proporcionar un nombre", 
        400
    );

    static noCategoryProvided = new PlaceError(
        "PLA-02", 
        "Se debe proporcionar una categoría", 
        400
    );

    static categoryNotSupported = new PlaceError(
        "PLA-03", 
        "La categoría prporcionada no se encuentra soportada", 
        400
    );


    static errors = [
        PlaceError.noNameProvided,
        PlaceError.noCategoryProvided,
        PlaceError.categoryNotSupported
    ]

    static throwErrorIdentifiedBy(id: string) {
        let error = this.errors.find(e => e.id == id);
        if (error) {
            throw error;
        }
    }
}