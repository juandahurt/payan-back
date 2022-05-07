import { PYElementSectionItem, PYElementSectionItemLayout } from "./element-section-item.model";

export class PYElementSection {
    itemLayout: PYElementSectionItemLayout;
    items: PYElementSectionItem[];

    constructor(itemLayout: PYElementSectionItemLayout) {
        this.itemLayout = itemLayout;
        this.items = [];
    }
}