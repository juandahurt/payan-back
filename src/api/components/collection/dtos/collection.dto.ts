import { PYCollectionElementDTO } from "./collection-element.dto";

export class PYCollectionDTO {
    title: string;
    elements: PYCollectionElementDTO[];

    constructor(title: string, elements: PYCollectionElementDTO[]) {
        this.title = title;
        this.elements = elements;
    }    
}