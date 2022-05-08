export enum PYElementSectionItemLayout {
    image = "image",
    title = "title",
    text = "text"
}

export class PYElementSectionItem {}

export class PYElementSectionImageItem extends PYElementSectionItem {
    image: string;

    constructor(image: string) {
        super();
        this.image = image;
    }
}

export class PYElementSectionTitleItem extends PYElementSectionItem {
    image?: string;
    title: string;
    subtitle: string;

    constructor(title: string, subtitle: string, image?: string) {
        super();
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
    }
}

export class PYElementSectionTextItem extends PYElementSectionItem {
    content: string;
    alignment: PYElementSectionTextItemAlignment;

    constructor(content: string, alignment: PYElementSectionTextItemAlignment) {
        super();
        this.content = content;
        this.alignment = alignment;
    }
}

export enum PYElementSectionTextItemAlignment {
    justify = "justify",
    right = "right",
    left = "left",
    center = "center"
}