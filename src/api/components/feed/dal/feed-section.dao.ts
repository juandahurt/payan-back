import elementTypeSchema, { PYElementTypeDocument } from "../../element-type/dal/element-type.schema";
import { PYElementType } from "../../element/models/element-type.model";
import { PYFeedSectionDataAccessLogic } from "../interfaces/feed-section-data-access-logic.interface";
import { PYFeedSection } from "../models/feed-section.model";
import FeedSectionSchema from "./feed-section.schema";

export class PYFeedSectionDAO implements PYFeedSectionDataAccessLogic {
    async getAllSections(): Promise<PYFeedSection[]> {
        let types = await elementTypeSchema.find({});
        let sections = await FeedSectionSchema.find({});
        return sections.map(doc => {
            let elementType = types.find(t => { return t._id == doc.elementType });
            return new PYFeedSection(
                doc.header,
                doc.elementLayout,
                new PYElementType(elementType!._id, elementType!.name.es),
                doc.layout,
                doc.groupBySubtype
            );
        });
    }
}