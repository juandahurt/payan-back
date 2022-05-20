import { PYPlaceCategoryDAO } from "../../place-category/dal/place-category.dao";
import { PYFeedPageDTO } from "../dtos/feed-page.dto";

export interface PYFeedBusinessLogic {
    placeCategoryDAO: PYPlaceCategoryDAO;

    buildFeedPage(): Promise<PYFeedPageDTO>;
}