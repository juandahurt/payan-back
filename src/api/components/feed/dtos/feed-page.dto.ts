import { PYPlaceCategoryDTO } from "../../place-category/dtos/place_category.dto";

export class PYFeedPageDTO {
    placeCategories: PYPlaceCategoryDTO[];

    constructor(placeCategories: PYPlaceCategoryDTO[]) {
        this.placeCategories = placeCategories;
    }
}