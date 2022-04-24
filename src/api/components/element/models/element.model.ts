export class PYElement {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    description: string;
    type: string;
    subtype?: string;

    constructor(id: string, title: string, image: string, description: string, type: string, subtitle?: string, subtype?: string) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.description = description;
        this.type = type;
        this.subtype = subtype;
    }
}