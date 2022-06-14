import { PYHeroDataAccessLogic } from "../interfaces/hero-data-access-logic.interface";
import { PYHeroDocument } from "./hero.document";
import heroSchema from "./hero.schema";

export class PYHeroDAO implements PYHeroDataAccessLogic {
    async listHeroes(): Promise<PYHeroDocument[]> {
        let heroes = await heroSchema.find({});
        return heroes;
    }
}