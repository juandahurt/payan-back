import { PYFeedSectionDAO } from "../dal/feed-section.dao";
import { PYFeedBusinessLogic } from "../interfaces/feed-business-logic.interface";
import { PYFeedPage } from "../models/feed-page.model";

export class PYFeedService implements PYFeedBusinessLogic {
    feedSectionDAO: PYFeedSectionDAO;

    constructor() {
        this.feedSectionDAO = new PYFeedSectionDAO();
    }

    async buildFeedLayout(): Promise<PYFeedPage> {
        let page = new PYFeedPage();
        page.sections = await this.feedSectionDAO.getAllSections();
        return page;
    }
}