import { PYHeroDAO } from "../../hero/dal/hero.dao";
import { PYHeroDataAccessLogic } from "../../hero/interfaces/hero-data-access-logic.interface";
import { PYCollectionItemDTO } from "../dto/collection-items.dto";
import { PYCollectionDTO } from "../dto/collection.dto";
import { PYCollectionBusinessLogic } from "../interfaces/collection-business-logic.interface";

export class PYCollectionService implements PYCollectionBusinessLogic {
    heroDAO: PYHeroDataAccessLogic;

    constructor(heroDAO: PYHeroDataAccessLogic = new PYHeroDAO()) {
        this.heroDAO = heroDAO;
    }

    async getCollection(type: string, category_code?: string): Promise<PYCollectionDTO> {
        let items: PYCollectionItemDTO[] = [];

        return new PYCollectionDTO(items);
    }
}