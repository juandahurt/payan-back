import { PYPlaceCategoryDocument } from "../dal/place-category.document";

export interface PYPlaceCategoryDataAccessLogic {
    listCategories(): Promise<PYPlaceCategoryDocument[]>;
}