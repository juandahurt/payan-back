import { PYCollectionDTO } from "../dtos/collection.dto";

export interface PYCollectionBusinessLogic {
    getCollectionByTypeId(typeId: string): Promise<PYCollectionDTO>
}