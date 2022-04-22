import { PYElementDAO } from "../../element/dal/element.dao";
import { PYElement } from "../../element/models/element.model";
import { PYFeedSectionDAO } from "../dal/feed-section.dao";
import { PYFeedBusinessLogic } from "../interfaces/feed-business-logic.interface";
import { PYFeedElement } from "../models/feed-element.model";
import { PYFeedPage } from "../models/feed-page.model";

export class PYFeedService implements PYFeedBusinessLogic {
    feedSectionDAO: PYFeedSectionDAO;
    elementDAO: PYElementDAO;

    constructor() {
        this.feedSectionDAO = new PYFeedSectionDAO();
        this.elementDAO = new PYElementDAO();
    }

    async buildFeedLayout(): Promise<PYFeedPage> {
        let page = new PYFeedPage();
        var sections = await this.feedSectionDAO.getAllSections();
        for (var sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
            let elements = await this.elementDAO.getElementsByType(sections[sectionIndex].elementType);
            let feedElements = this._mapElementsToFeedElements(elements);
            sections[sectionIndex].elements = feedElements;
        }
        page.sections = sections;
        return page;
    }

    private _mapElementsToFeedElements(elements: PYElement[]): PYFeedElement[] {
        return elements.map(element => {
            return new PYFeedElement(
                element.title,
                element.image,
                this._getLinkOfElement(element),
                element.subtitle
            );
        });
    }

    private _getLinkOfElement(element: PYElement): string {
        var link = ""

        if (element.subtype) {
            link = "/collection?type=" + element.type + "&subtype=" + element.subtype;
        } else {
            link = "/item?id=" + element.id;
        }

        return link
    }
}