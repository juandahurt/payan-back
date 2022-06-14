export class PYHeroDTO {
    name: string;
    imageUrl: string;
    description: string;

    constructor(name: string, imageUrl: string, description: string) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
    }
}