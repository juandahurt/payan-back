import { PYHeroDAO } from "../dal/hero.dao";
import { PYHeroDTO } from "../dtos/hero.dto";
import { PYHeroBusinessLogic } from "../interfaces/hero-business-logic.interface";
import { PYHeroDataAccessLogic } from "../interfaces/hero-data-access-logic.interface";

export class PYHeroService implements PYHeroBusinessLogic {
    heroDAO: PYHeroDataAccessLogic;

    constructor(heroDAO: PYHeroDataAccessLogic = new PYHeroDAO()) {
        this.heroDAO = heroDAO;
    }

    async getHero(id: string): Promise<PYHeroDTO> {
        // TODO: throw error when id is wrong!
        let hero = await this.heroDAO.getHero(id);
        return new PYHeroDTO(
            hero?.name ?? "",
            hero?.image_url ?? "",
            hero?.description ?? ""
        );
    }
}