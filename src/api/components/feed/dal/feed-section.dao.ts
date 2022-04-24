import { PYFeedSectionDataAccessLogic } from "../interfaces/feed-section-data-access-logic.interface";
import { PYFeedElementLayout, PYFeedElementLayoutType } from "../models/feed-element-layout.model";
import { PYFeedSectionHeader } from "../models/feed-section-header.model";
import { PYFeedSection, PYFeedSectionLayout } from "../models/feed-section.model";
import FeedSectionSchema from "./feed-section.schema";

export class PYFeedSectionDAO implements PYFeedSectionDataAccessLogic {
    async getAllSections(): Promise<PYFeedSection[]> {
        let sections = await FeedSectionSchema.find({})
        return sections.map((doc) => {
            return new PYFeedSection(doc.header, doc.elementLayout, doc.elementType, doc.layout);
        });
    }
}