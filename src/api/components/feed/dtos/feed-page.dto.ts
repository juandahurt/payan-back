import { PYHeroPreviewDTO } from "./hero-preview.dto";
import { PYPlaceCategoryDTO } from "./place-category.dto";
import { PYStoryPreviewDTO } from "./story-preview.dto";

export class PYFeedPageDTO {
    placeCategories: PYPlaceCategoryDTO[];
    heroes: PYHeroPreviewDTO[];
    stories: PYStoryPreviewDTO[];

    constructor(placeCategories: PYPlaceCategoryDTO[], heores: PYHeroPreviewDTO[], stories: PYStoryPreviewDTO[]) {
        this.placeCategories = placeCategories;
        this.heroes = heores;
        this.stories = stories;
    }
}