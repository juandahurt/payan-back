export class PYFeedElement {
    title: string;
    subtitle?: string;
    image: string;
    secondaryImage?: string;
    link: string;

    constructor(title: string, image: string, link: string, subtitle?: string, secondaryImage?: string) {
        this.title = title;
        this.image = image;
        this.link = link;
        this.subtitle = subtitle;
        this.secondaryImage = secondaryImage;
    }
}