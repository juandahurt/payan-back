import { PYElementType } from "./element-type.model";

export class PYElement {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    secondaryImage?: string;
    description: string;
    type: string;

    constructor(id: string, title: string, image: string, description: string, type: string, subtitle: string, secondaryImage?: string) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.description = description;
        this.type = type;
        this.secondaryImage = secondaryImage;
    }
}