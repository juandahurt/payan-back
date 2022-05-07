export enum PYElementSectionItemLayout {
    image = "image",
    title = "title"
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

