import { PYPlaceDTO } from "../dtos/place.dto";
import { PYPlaceDataAccessLogic } from "./place-data-access-logic.interface";

export interface PYPlaceBusinessLogic {
    placeDAO: PYPlaceDataAccessLogic;

    getPlace(id: string): Promise<PYPlaceDTO>
}