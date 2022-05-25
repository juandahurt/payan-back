import { __ } from "i18n";
import { PYPlaceCategoryDAO } from "../../place-category/dal/place-category.dao";
import { PYPlaceCategoryDTO } from "../dtos/place-category.dto";
import { PYPlaceCategoryDataAccessLogic } from "../../place-category/interfaces/place-category-data-access-logic.interface";
import { PYPlaceDAO } from "../../place/dal/place.dao";
import { PYPlaceDocument } from "../../place/dal/place.document";
import { PYPlaceDataAccessLogic } from "../../place/interface/place-data-access-logic.interface";
import { PYFeedPageDTO } from "../dtos/feed-page.dto";
import { PYFeedBusinessLogic } from "../interfaces/feed-business-logic.interface";
import { PYHeroDataAccessLogic } from "../../hero/interfaces/hero-data-access-logic.interface";
import { PYHeroDAO } from "../../hero/dal/hero.dao";
import { PYHeroPreviewDTO } from "../dtos/hero-preview.dto";

export class PYFeedService implements PYFeedBusinessLogic {
    placeCategoryDAO: PYPlaceCategoryDataAccessLogic;
    placeDAO: PYPlaceDataAccessLogic;
    heroDAO: PYHeroDataAccessLogic;

    constructor(placeCategoryDAO: PYPlaceCategoryDAO = new PYPlaceCategoryDAO(), placeDAO: PYPlaceDataAccessLogic = new PYPlaceDAO(), heroDAO: PYHeroDataAccessLogic = new PYHeroDAO()) {
        this.placeCategoryDAO = placeCategoryDAO;
        this.placeDAO = placeDAO;
        this.heroDAO = heroDAO;
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
                places.length,
                "payan://collection?type=place&category_code=" + rawCategories[i].code
            );
            categories.push(category);
        }

        let rawHeroes = await this.heroDAO.listHeroes();
        let heroes = rawHeroes.map((hero) => 
            new PYHeroPreviewDTO(
                hero.name, 
                hero.image_url,
                "payan://hero?id=" + hero.id
            )
        );
        heroes = heroes.sort(() => .5 - Math.random());
        if (heroes.length > 4) {
            heroes = heroes.slice(0, 4); // TODO: get this value from a config file (?)
        }
        return new PYFeedPageDTO(categories, heroes);
    }    
}