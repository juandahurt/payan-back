import { PYFeedBusinessLogic } from "../interfaces/feed-business-logic.interface";
import { PYFeedElementLayout } from "../models/feed-element-layout.model";
import { PYFeedElement } from "../models/feed-element.model";
import { PYFeedPage } from "../models/feed-page.model";
import { PYFeedSectionHeader } from "../models/feed-section-header.model";
import { PYFeedSection } from "../models/feed-section.model";

export class PYFeedService implements PYFeedBusinessLogic {
    async buildFeedLayout(): Promise<PYFeedPage> {
        let page = new PYFeedPage();
        // TODO: get layout from db
        let nSections = 5;
        var sections: PYFeedSection[] = [];

        for (var i = 0; i < nSections; i++) {
            let header = new PYFeedSectionHeader("Header title", i % 2 == 0 ? undefined : "Subtitle");
            let elementLayout = new PYFeedElementLayout();
            let section = new PYFeedSection(header, elementLayout);
            section.elements = [
                new PYFeedElement()
            ]
            sections.push(section);
        }

        page.sections = sections;
        return page;
    }
}