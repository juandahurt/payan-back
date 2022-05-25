import { PYHeroDataAccessLogic } from "../../hero/interfaces/hero-data-access-logic.interface";
import { PYPlaceCategoryDataAccessLogic } from "../../place-category/interfaces/place-category-data-access-logic.interface";
import { PYPlaceDataAccessLogic } from "../../place/interface/place-data-access-logic.interface";
import { PYCollectionDTO } from "../dto/collection.dto";

export interface PYCollectionBusinessLogic {
    heroDAO: PYHeroDataAccessLogic;
    placeDAO: PYPlaceDataAccessLogic;
    placeCategoryDAO: PYPlaceCategoryDataAccessLogic;

    getCollection(type: string, category_code?: string): Promise<PYCollectionDTO>
}