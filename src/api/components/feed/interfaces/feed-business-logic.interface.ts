import { PYFeedPage } from "../models/feed-page.model";

export interface PYFeedBusinessLogic {
    /**
     * Builds the feed view layout.
     * 
     * See `PYFeedPage`
     */
    buildFeedLayout(): Promise<PYFeedPage>
}