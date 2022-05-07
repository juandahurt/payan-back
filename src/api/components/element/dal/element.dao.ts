import { PYElementDataAccessLogic } from "../interfaces/element-data-acess-logic.interface";
import { PYElement } from "../models/element.model";
import ElementSchema from "./element.schema";

export class PYElementDAO implements PYElementDataAccessLogic {
    async getElementsByType(type: string): Promise<PYElement[]> {
        let docs = await ElementSchema.find({});
        docs = docs.filter(doc => { return doc.type == type });
        return docs.map(doc => {
            return new PYElement(
                doc._id,
                doc.title,
                doc.image,
                doc.description,
                doc.type,
                doc.subtitle
            );
        });
    }

    async getElementById(id: string): Promise<PYElement | null> {
        let docs = await ElementSchema.find({});
        docs = docs.filter(doc => { return doc._id == id; });
        if (docs.length == 1) {
            let doc = docs[0];
            return new PYElement(
                doc._id,
                doc.title,
                doc.image,
                doc.description,
                doc.type,
                doc.subtitle
            );
        }
        return null;
    }
}