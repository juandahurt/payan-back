import { PYHeroDAO } from "../../hero/dal/hero.dao";
import { PYHeroDataAccessLogic } from "../../hero/interfaces/hero-data-access-logic.interface";
import { PYPlaceDAO } from "../../place/dal/place.dao";
import { PYPlaceDataAccessLogic } from "../../place/interface/place-data-access-logic.interface";
import { PYCollectionItemDTO } from "../dto/collection-items.dto";
import { PYCollectionDTO } from "../dto/collection.dto";
import { PYCollectionBusinessLogic } from "../interfaces/collection-business-logic.interface";

export class PYCollectionService implements PYCollectionBusinessLogic {
    heroDAO: PYHeroDataAccessLogic;
    placeDAO: PYPlaceDataAccessLogic;

    constructor(heroDAO: PYHeroDataAccessLogic = new PYHeroDAO(), placeDAO: PYPlaceDataAccessLogic = new PYPlaceDAO()) {
        this.heroDAO = heroDAO;
        this.placeDAO = placeDAO;
    }

    async getCollection(type: string, category_code?: string): Promise<PYCollectionDTO> {
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
                // TODO: check if category_code is sent!!
                let rawPlaces = await this.placeDAO.listPlacesByCategory(category_code ?? "");
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