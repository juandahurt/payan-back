import { PYError } from "../../../../error";

export class PYPlaceNotFoundError extends PYError {
    constructor() {
        super(
            "PL-001", 
            "Place not found", 
            "No pudimos encontrar el lugar solicitado.", 
            404
        );
    }
}