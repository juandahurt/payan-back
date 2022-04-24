import { PYFeedElementLayout } from "./feed-element-layout.model";
import { PYFeedElement } from "./feed-element.model";
import { PYFeedSectionHeader } from "./feed-section-header.model";

export class PYFeedSection {
    /**
     * Section header.
     */
    header: PYFeedSectionHeader;

    /**
     * Layout of every element inside the section.
     */
    elementLayout: PYFeedElementLayout;

    /** 
     * List of elements contained inside the section.
    */
    elements: PYFeedElement[];

    /**
     * Type of elements that the sections contains.
     */
    elementType: string;

    /**
     * Section's layout.
     */
    layout: PYFeedSectionLayout;

    constructor(header: PYFeedSectionHeader, elementLayout: PYFeedElementLayout, elementType: string, layout: PYFeedSectionLayout) {
        this.header = header;
        this.elementLayout = elementLayout;
        this.elements = [];
        this.elementType = elementType;
        this.layout = layout;
    }
}

/**
 * Feed section layout type
 */
export enum PYFeedSectionLayout {
    horizontal,
    grid
}