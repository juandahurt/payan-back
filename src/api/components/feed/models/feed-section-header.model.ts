export class PYFeedSectionHeader {
    /** 
     * Header title.
     */
    title: string; 
    /**
     * Header subtitle.
     */
    subtitle?: string;

    constructor(title: string, subtitle?: string) {
        this.title = title;
        this.subtitle = subtitle;
    }
}