import { PYElementType } from "../../element/models/element-type.model";
import { PYElementTypeDataAccessLogic } from "../interfaces/element-type-data-access-logic.interface";
import elementTypeSchema from "./element-type.schema";

export class PYElementTypeDAO implements PYElementTypeDataAccessLogic {
    async getTypes(): Promise<PYElementType[]> {
        let docs = await elementTypeSchema.find({});
        let types = docs.map(doc => {
            return new PYElementType(
                doc._id,
                doc.name.es,
                doc.parent
            );
        });
        return types;
    }
}