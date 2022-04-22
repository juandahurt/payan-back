import { PYFeedElementDimensions } from "./feed-element-dimensions.model";

export class PYFeedElementLayout {
    type: PYFeedElementLayoutType = PYFeedElementLayoutType.basic;
    dimensions?: PYFeedElementDimensions;

    constructor(type: PYFeedElementLayoutType, dimensions?: PYFeedElementDimensions) {
        this.type = type;
        this.dimensions = dimensions;
    }
}

export enum PYFeedElementLayoutType {
    collection = "collection",
    basic = "basic",
    innerCard = "inner_card"
}