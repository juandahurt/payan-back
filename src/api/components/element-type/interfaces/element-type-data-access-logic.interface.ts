import { PYElementType } from "../../element/models/element-type.model";

export interface PYElementTypeDataAccessLogic {
    getTypes(): Promise<PYElementType[]>
}