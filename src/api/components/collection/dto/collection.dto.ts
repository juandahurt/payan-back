import { PYCollectionItemDTO } from "./collection-items.dto";

export class PYCollectionDTO {
    title: string;
    items: PYCollectionItemDTO[];

    constructor(title: string, items: PYCollectionItemDTO[]) {
        this.title = title;
        this.items = items;
    }
}