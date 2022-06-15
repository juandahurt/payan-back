import { PYHeroSection } from "../interfaces/hero-section.interface";

export class PYHeroDTO {
    name: string;
    imageUrl: string;
    description: string;
    sections: PYHeroSection[];

    constructor(name: string, imageUrl: string, description: string, sections: PYHeroSection[]) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.sections = sections;
    }
}