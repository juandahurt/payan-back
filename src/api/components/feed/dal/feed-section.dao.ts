import { PYFeedSectionDataAccessLogic } from "../interfaces/feed-section-data-access-logic.interface";
import { PYFeedSection } from "../models/feed-section.model";
import FeedSectionSchema from "./feed-section.schema";

export class PYFeedSectionDAO implements PYFeedSectionDataAccessLogic {
    async getAllSections(): Promise<PYFeedSection[]> {
        let sections = await FeedSectionSchema.find({})
        return sections.map((doc) => {
            return new PYFeedSection(
                doc.header, 
                doc.elementLayout, 
                doc.elementType, 
                doc.layout,
                doc.groupBySubtype
            );
        });
    }
}