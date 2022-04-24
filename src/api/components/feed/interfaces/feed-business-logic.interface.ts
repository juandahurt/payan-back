import { PYFeedSectionDAO } from "../dal/feed-section.dao";
import { PYFeedPage } from "../models/feed-page.model";

export interface PYFeedBusinessLogic {
    /**
     * Feed section data access object.
     */
    feedSectionDAO: PYFeedSectionDAO;

    /**
     * Builds the feed view layout.
     * 
     * See `PYFeedPage`
     */
    buildFeedLayout(): Promise<PYFeedPage>
}