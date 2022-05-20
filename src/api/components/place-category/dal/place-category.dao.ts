import { PYPlaceCategoryDataAccessLogic } from "../interfaces/place-category-data-access-logic.interface";
import { PYPlaceCategoryDocument } from "./place-category.document";
import placeCategorySchema from "./place-category.schema";

export class PYPlaceCategoryDAO implements PYPlaceCategoryDataAccessLogic {
    async listCategories(): Promise<PYPlaceCategoryDocument[]> {
        let categories = await placeCategorySchema.find({});
        return categories;
    }
}