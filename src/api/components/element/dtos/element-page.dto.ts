import { PYElementSection } from "../models/element-section.model";

export class PYElementPageDTO {
    sections: PYElementSection[];

    constructor() {
        this.sections = [];
    }
}