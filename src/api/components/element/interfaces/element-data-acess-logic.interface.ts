import { PYElement } from "../models/element.model";

export interface PYElementDataAccessLogic {
    getElementsByType(type: string): Promise<PYElement[]>
    getElementsByTypeAndSubtype(type: string, subtype: String): Promise<PYElement[]>
}