import { PYElementType } from "../../element/models/element-type.model";
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
    elementType: PYElementType;

    /**
     * Section's layout.
     */
    layout: PYFeedSectionLayout;

    /**
     * Indicates if the items must be grouped by their subtype
     */
    groupBySubtype: boolean;

    constructor(header: PYFeedSectionHeader, elementLayout: PYFeedElementLayout, elementType: PYElementType, layout: PYFeedSectionLayout, groupBySubtype: boolean) {
        this.header = header;
        this.elementLayout = elementLayout;
        this.elements = [];
        this.elementType = elementType;
        this.layout = layout;
        this.groupBySubtype = groupBySubtype;
    }
}

/**
 * Feed section layout type
 */
export enum PYFeedSectionLayout {
    horizontal,
    grid
}