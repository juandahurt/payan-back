import { PYCollectionLayout } from "../models/collection-layout.model";
import { PYCollectionElementDTO } from "./collection-element.dto";

export class PYCollectionDTO {
    title: string;
    elements: PYCollectionElementDTO[];
    layout: PYCollectionLayout;

    constructor(title: string, elements: PYCollectionElementDTO[], layout: PYCollectionLayout) {
        this.title = title;
        this.elements = elements;
        this.layout = layout;
    }    
}