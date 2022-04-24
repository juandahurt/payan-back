import { PYFeedSection } from "../models/feed-section.model";

export interface PYFeedSectionDataAccessLogic {
    getAllSections(): Promise<PYFeedSection[]>
}