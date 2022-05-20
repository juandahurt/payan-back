import { PYPlaceCategoryDAO } from "../../place-category/dal/place-category.dao";
import { PYPlaceCategoryDTO } from "../../place-category/dtos/place_category.dto";
import { PYFeedPageDTO } from "../dtos/feed-page.dto";
import { PYFeedBusinessLogic } from "../interfaces/feed-business-logic.interface";

export class PYFeedService implements PYFeedBusinessLogic {
    placeCategoryDAO: PYPlaceCategoryDAO;

    constructor(placeCategoryDAO: PYPlaceCategoryDAO = new PYPlaceCategoryDAO()) {
        this.placeCategoryDAO = placeCategoryDAO;
    }

    async buildFeedPage(): Promise<PYFeedPageDTO> {
        let rawCategories = await this.placeCategoryDAO.listCategories();
        let categories = rawCategories.map((category) => {
            let name = category.name_key;
            let n = 12; // TODO: remove mock value
            return new PYPlaceCategoryDTO(name, n);
        });
        return new PYFeedPageDTO(categories);
    }    
}