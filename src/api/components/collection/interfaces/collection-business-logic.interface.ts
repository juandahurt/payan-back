import { PYHeroDataAccessLogic } from "../../hero/interfaces/hero-data-access-logic.interface";
import { PYCollectionDTO } from "../dto/collection.dto";

export interface PYCollectionBusinessLogic {
    heroDAO: PYHeroDataAccessLogic;

    getCollection(type: string, category_code?: string): Promise<PYCollectionDTO>
}