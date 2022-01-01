import { PlaceDAO } from "../dal/fact.dao";
import { Fact } from "../dal/fact.model";

export class FactService {
    /**
     * Obtiene un dato aleatorio
     */
     public async get(): Promise<Fact> {
        return new PlaceDAO().get();
    }
}