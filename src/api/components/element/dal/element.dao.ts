import { PYElementDataAccessLogic } from "../interfaces/element-data-acess-logic.interface";
import { PYElement } from "../models/element.model";
import ElementSchema from "./element.schema";

export class PYElementDAO implements PYElementDataAccessLogic {
    async getElementsByType(type: string): Promise<PYElement[]> {
        let docs = await ElementSchema.find({
            type: type
        });
        return docs.map(doc => {
            return new PYElement(
                doc._id,
                doc.title,
                doc.image,
                doc.description,
                doc.type,
                doc.subtitle,
                doc.subtype
            );
        })
    }
}