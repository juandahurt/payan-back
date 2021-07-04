import { connectToDB, disconnectDB } from "../../../../mongoose";
import { Helper } from "../../../helpers/helper";
import FactModel, { Fact } from './fact.model';

export class PlaceDAO {
    /**
     * Obtiene un dato aleatorio de la BD.
     */
     async get(): Promise<Fact> {
        await connectToDB();
        let placeCreated = await Helper.randomDocument(FactModel);
        await disconnectDB();
        return placeCreated;
    }
}