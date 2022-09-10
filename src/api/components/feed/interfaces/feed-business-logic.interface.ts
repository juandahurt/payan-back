import { PYHeroDataAccessLogic } from "../../hero/interfaces/hero-data-access-logic.interface";
import { PYPlaceCategoryDataAccessLogic } from "../../place-category/interfaces/place-category-data-access-logic.interface";
import { PYPlaceDataAccessLogic } from "../../place/interface/place-data-access-logic.interface";
import { PYStoryDataAccessLogic } from "../../story/interfaces/story-data-access-logic.interface";
import { PYFeedPageDTO } from "../dtos/feed-page.dto";

export interface PYFeedBusinessLogic {
    placeCategoryDAO: PYPlaceCategoryDataAccessLogic;
    placeDAO: PYPlaceDataAccessLogic;
    heroDAO: PYHeroDataAccessLogic;
    storyDAO: PYStoryDataAccessLogic;

    buildFeedPage(): Promise<PYFeedPageDTO>;
}