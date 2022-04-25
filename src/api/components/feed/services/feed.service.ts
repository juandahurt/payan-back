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
            // check if elements have a subtype
            let haveSubtype = elements.find(element => {
                return element.subtype != undefined; 
            });
            if (haveSubtype) {
                let feedElements = await this._mapElementsToFeedElementsWithSubtype(sections[sectionIndex].elementType, elements);
                sections[sectionIndex].elements = feedElements;
            } else {
                let feedElements = this._mapElementsToFeedElements(elements);
                sections[sectionIndex].elements = feedElements;
            }
        }
        page.sections = sections;
        return page;
    }

    private _mapElementsToFeedElements(elements: PYElement[]): PYFeedElement[] {
        return elements.map(element => {
            return new PYFeedElement(
                element.title,
                element.image,
                "/item?id=" + element.id,
                element.subtitle
            );
        });
    }

    private async _mapElementsToFeedElementsWithSubtype(type: string, elements: PYElement[]): Promise<PYFeedElement[]> {
        // get list of subtypes
        let subtypes = elements.map(element => {
            return element.subtype;
        });
        // remove the duplicated ones
        subtypes = subtypes.filter((subtype, index) => {
            return subtypes.indexOf(subtype) === index;
        });

        let feedElements: PYFeedElement[] = []
        for (var subtypeIndex = 0; subtypeIndex < subtypes.length; subtypeIndex++) {
            let subtype = subtypes[subtypeIndex];
            let subtypeElements = await this.elementDAO.getElementsByTypeAndSubtype(type, subtype!);
            let randomElement = subtypeElements[Math.floor(Math.random()*subtypeElements.length)];
            feedElements.push(
                new PYFeedElement(
                    this._translateSubtype(subtype!),
                    randomElement.image,
                    "/collection?type=" + type + "&subtype=" + subtype,
                    subtypeElements.length + " elementos"
                )
            );
        }
        return feedElements;
    }

    private _translateSubtype(subtype: string): string {
        switch (subtype) {
            case "church":
                return "Iglesias";
            case "bridge":
                return "Puentes";
        }
        return "";
    }
}