import { PYCollectionItemDTO } from "./collection-items.dto";

export class PYCollectionDTO {
    items: PYCollectionItemDTO[];

    constructor(items: PYCollectionItemDTO[]) {
        this.items = items;
    }
}