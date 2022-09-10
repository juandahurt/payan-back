import { PYHeroDTO } from "../dtos/hero.dto";
import { PYHeroDataAccessLogic } from "./hero-data-access-logic.interface";

export interface PYHeroBusinessLogic {
    heroDAO: PYHeroDataAccessLogic;

    getHero(id: string): Promise<PYHeroDTO>
}