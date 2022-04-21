import { PYFeedElementDimensions } from "./feed-element-dimensions.model";

export class PYFeedElementLayout {
    type: PYFeedElementLayoutType = PYFeedElementLayoutType.basic;
    dimensions?: PYFeedElementDimensions;
}

enum PYFeedElementLayoutType {
    collection = "collection",
    basic = "basic",
    innerCard = "inner_card"
}