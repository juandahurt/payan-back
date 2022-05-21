import { __ } from "i18n";
import { PYPlaceCategoryDAO } from "../../place-category/dal/place-category.dao";
import { PYPlaceCategoryDTO } from "../../place-category/dtos/place_category.dto";
import { PYPlaceCategoryDataAccessLogic } from "../../place-category/interfaces/place-category-data-access-logic.interface";
import { PYPlaceDAO } from "../../place/dal/place.dao";
import { PYPlaceDocument } from "../../place/dal/place.document";
import { PYPlaceDataAccessLogic } from "../../place/interface/place-data-access-logic.interface";
import { PYFeedPageDTO } from "../dtos/feed-page.dto";
import { PYFeedBusinessLogic } from "../interfaces/feed-business-logic.interface";

export class PYFeedService implements PYFeedBusinessLogic {
    placeCategoryDAO: PYPlaceCategoryDataAccessLogic;
    placeDAO: PYPlaceDataAccessLogic;

    constructor(placeCategoryDAO: PYPlaceCategoryDAO = new PYPlaceCategoryDAO(), placeDAO: PYPlaceDataAccessLogic = new PYPlaceDAO()) {
        this.placeCategoryDAO = placeCategoryDAO;
        this.placeDAO = placeDAO;
    }

    async buildFeedPage(): Promise<PYFeedPageDTO> {
        let rawCategories = await this.placeCategoryDAO.listCategories();
        let categories: PYPlaceCategoryDTO[] = [];
        for (let i = 0; i < rawCategories.length; i++) {
            let places = await this.placeDAO.listPlacesByCategory(rawCategories[i].code);
            let randomPlace: PYPlaceDocument | undefined;
            if (places.length > 0) {
                randomPlace = places[Math.floor(Math.random() * places.length)];
            }
            let category = new PYPlaceCategoryDTO(
                randomPlace?.image_url ?? "", 
                __(rawCategories[i].name_key),
                places.length
            );
            categories.push(category);
        }
        return new PYFeedPageDTO(categories);
    }    
}