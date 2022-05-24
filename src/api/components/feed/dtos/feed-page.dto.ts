import { PYHeroPreviewDTO } from "./hero-preview.dto";
import { PYPlaceCategoryDTO } from "./place-category.dto";

export class PYFeedPageDTO {
    placeCategories: PYPlaceCategoryDTO[];
    heroes: PYHeroPreviewDTO[];

    constructor(placeCategories: PYPlaceCategoryDTO[], heores: PYHeroPreviewDTO[]) {
        this.placeCategories = placeCategories;
        this.heroes = heores;
    }
}