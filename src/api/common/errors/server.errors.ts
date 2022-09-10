import { PYError } from "../../../error";

export class PYUnknownError extends PYError {
    constructor() {
        super("PY-000", "Unknown error", "Ha ocurrido un error desconocido.", 500);
    }
}