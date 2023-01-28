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
import { PYStoryDataAccessLogic } from "../../story/interfaces/story-data-access-logic.interface";
import { PYStoryDAO } from "../../story/dal/story.dao";
import { PYStoryPreviewDTO } from "../dtos/story-preview.dto";

export class PYFeedService implements PYFeedBusinessLogic {
    placeCategoryDAO: PYPlaceCategoryDataAccessLogic;
    placeDAO: PYPlaceDataAccessLogic;
    heroDAO: PYHeroDataAccessLogic;
    storyDAO: PYStoryDataAccessLogic;

    constructor(placeCategoryDAO: PYPlaceCategoryDAO = new PYPlaceCategoryDAO(), placeDAO: PYPlaceDataAccessLogic = new PYPlaceDAO(), heroDAO: PYHeroDataAccessLogic = new PYHeroDAO(), storyDAO: PYStoryDataAccessLogic = new PYStoryDAO()) {
        this.placeCategoryDAO = placeCategoryDAO;
        this.placeDAO = placeDAO;
        this.heroDAO = heroDAO;
        this.storyDAO = storyDAO;
    }

    async buildFeedPage(): Promise<PYFeedPageDTO> {
        // MARK: place categories
        let rawCategories = await this.placeCategoryDAO.listCategories();
        let categories: PYPlaceCategoryDTO[] = [];
        for (let i = 0; i < rawCategories.length; i++) {
            let places = await this.placeDAO.listPlacesByCategory(rawCategories[i].id);
            let randomPlace: PYPlaceDocument | undefined;
            places = places.filter(place => place.isVisible);
            if (places.length == 0) { continue; }
            randomPlace = places[Math.floor(Math.random() * places.length)];
            let category = new PYPlaceCategoryDTO(
                randomPlace?.image_url ?? "", 
                rawCategories[i].name,
                places.length,
                "payan://collection?type=place&category_id=" + rawCategories[i].id
            );
            categories.push(category);
        }

        // MARK: heroes preview
        let rawHeroes = await this.heroDAO.listHeroes();
        rawHeroes = rawHeroes.filter(hero => hero.isVisible);
        let heroes = rawHeroes.map((hero) => 
            new PYHeroPreviewDTO(
                hero.name, 
                hero.image_url,
                "payan://hero?id=" + hero.id,
                hero.bornAt + " - " + hero.diedAt
            )
        );
        heroes = heroes.sort(() => .5 - Math.random());
        if (heroes.length > 1) {
            heroes = heroes.slice(0, 2); // TODO: get this value from a config file (?)
        }

        // MARK: stories previews
        let rawStories = await this.storyDAO.list();
        let stories: PYStoryPreviewDTO[] = []
        if (rawStories.length > 0) {
            stories = rawStories.map((story) => {
                return new PYStoryPreviewDTO(
                    story.id,
                    "payan://story?id=" + story.id, 
                    story.title, 
                    story.image, 
                    story.hash
                );
            });
        }

        return new PYFeedPageDTO(categories, heroes, stories);
    }    
}