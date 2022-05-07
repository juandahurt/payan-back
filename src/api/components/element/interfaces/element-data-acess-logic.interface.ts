import { PYElement } from "../models/element.model";

export interface PYElementDataAccessLogic {
    getElementsByType(type: string): Promise<PYElement[]>
    getElementById(id: string): Promise<PYElement | null>
}