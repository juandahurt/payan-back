import { PYElementTypeDAO } from "../../element-type/dal/element-type.dao";
import { PYElementDAO } from "../../element/dal/element.dao";
import { PYElement } from "../../element/models/element.model";
import { PYFeedSectionDAO } from "../dal/feed-section.dao";
import { PYFeedBusinessLogic } from "../interfaces/feed-business-logic.interface";
import { PYFeedElement } from "../models/feed-element.model";
import { PYFeedPage } from "../models/feed-page.model";

export class PYFeedService implements PYFeedBusinessLogic {
    feedSectionDAO: PYFeedSectionDAO;
    elementDAO: PYElementDAO;
    elementTypeDAO: PYElementTypeDAO

    constructor() {
        this.feedSectionDAO = new PYFeedSectionDAO();
        this.elementDAO = new PYElementDAO();
        this.elementTypeDAO = new PYElementTypeDAO();
    }

    async buildFeedLayout(): Promise<PYFeedPage> {
        let page = new PYFeedPage();
        var sections = await this.feedSectionDAO.getAllSections();
        for (var sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
            // check if section must be grouped by subtype
            let section = sections[sectionIndex];
            let feedElements: PYFeedElement[];
            if (section.groupBySubtype) {
                feedElements = await this._mapElementsToGroupedFeedElements(section.elementType._id);
            } else {
                let elements = await this.elementDAO.getElementsByType(sections[sectionIndex].elementType._id);
                feedElements = this._mapElementsToFeedElements(elements);
            }
            sections[sectionIndex].elements = feedElements;
            // shuffle elements
            sections[sectionIndex].elements.sort((a, b) => 0.5 - Math.random());
        }
        page.sections = sections;
        return page;
    }

    private _mapElementsToFeedElements(elements: PYElement[]): PYFeedElement[] {
        return elements.map(element => {
            return new PYFeedElement(
                element.title,
                element.image,
                "payan://elementDetails?id=" + element.id,
                element.subtitle
            );
        });
    }

    private async _mapElementsToGroupedFeedElements(typeId: string): Promise<PYFeedElement[]> {
        let types = await this.elementTypeDAO.getTypes();
        let subtypes = types.filter(t => { return t.parent == typeId });
        let feedElements: PYFeedElement[] = []
        for (var subtypeIndex = 0; subtypeIndex < subtypes.length; subtypeIndex++) {
            let subtype = subtypes[subtypeIndex];
            let elements = await this.elementDAO.getElementsByType(subtype._id);
            let subtypeElements = elements.filter(e => { 
                return e.type == subtype._id
            });
            let randomElement = subtypeElements[Math.floor(Math.random()*subtypeElements.length)];
            feedElements.push(
                new PYFeedElement(
                    subtype.name,
                    randomElement.image,
                    "payan://collection?type=" + subtype._id,
                    subtypeElements.length + " elementos"
                )
            );
        }
        return feedElements;
    }
}