import { Types } from "mongoose";
import { PYHeroDAO } from "../../hero/dal/hero.dao";
import { PYHeroDataAccessLogic } from "../../hero/interfaces/hero-data-access-logic.interface";
import { PYPlaceCategoryDAO } from "../../place-category/dal/place-category.dao";
import { PYPlaceCategoryDataAccessLogic } from "../../place-category/interfaces/place-category-data-access-logic.interface";
import { PYPlaceDAO } from "../../place/dal/place.dao";
import { PYPlaceDataAccessLogic } from "../../place/interface/place-data-access-logic.interface";
import { PYCollectionItemDTO } from "../dto/collection-items.dto";
import { PYCollectionDTO } from "../dto/collection.dto";
import { PYCollectionBusinessLogic } from "../interfaces/collection-business-logic.interface";

export class PYCollectionService implements PYCollectionBusinessLogic {
    heroDAO: PYHeroDataAccessLogic;
    placeDAO: PYPlaceDataAccessLogic;
    placeCategoryDAO: PYPlaceCategoryDataAccessLogic;

    constructor(heroDAO: PYHeroDataAccessLogic = new PYHeroDAO(), placeDAO: PYPlaceDataAccessLogic = new PYPlaceDAO(), placeCategoryDAO: PYPlaceCategoryDataAccessLogic = new PYPlaceCategoryDAO()) {
        this.heroDAO = heroDAO;
        this.placeDAO = placeDAO;
        this.placeCategoryDAO = placeCategoryDAO;
    }

    async getCollection(type: string, category_id?: string): Promise<PYCollectionDTO> {
        let items: PYCollectionItemDTO[] = [];
        let title = ""
        switch (type) {
            case "hero":
                title = "Próceres";
                let rawHeroes = await this.heroDAO.listHeroes();
                let heroes = rawHeroes.map(
                    hero => new PYCollectionItemDTO(
                        hero.name, 
                        hero.image_url, 
                        "payan://hero?id=" + hero.id
                    )
                );
                items = items.concat(heroes);
                break
            case "place":
                // TODO: check if category_id is provided!!
                let categories = await this.placeCategoryDAO.listCategories();
                let category = categories.filter(cat => cat.id == Types.ObjectId(category_id))[0];
                title = category.name;
                let rawPlaces = await this.placeDAO.listPlacesByCategory(category_id ?? "");
                rawPlaces = rawPlaces.filter(place => place.isVisible);
                let places = rawPlaces.map(
                    place => new PYCollectionItemDTO(
                        place.title, 
                        place.image_url, 
                        "payan://place?id=" + place.id
                    )
                );
                items = items.concat(places);
                break
        }
        return new PYCollectionDTO(title, items);
    }
}