import { PYElementTypeDAO } from "../../element-type/dal/element-type.dao";
import { PYElementDAO } from "../../element/dal/element.dao";
import { PYCollectionElementDTO } from "../dtos/collection-element.dto";
import { PYCollectionDTO } from "../dtos/collection.dto";
import { PYCollectionBusinessLogic } from "../interfaces/collection-business-logic.interface";

export class PYCollectionService implements PYCollectionBusinessLogic {
    elementDAO: PYElementDAO;
    elementTypeDAO: PYElementTypeDAO;

    constructor() {
        this.elementDAO = new PYElementDAO();
        this.elementTypeDAO = new PYElementTypeDAO();
    }

    async getCollectionByTypeId(typeId: string): Promise<PYCollectionDTO> {
        let elements = await this.elementDAO.getElementsByType(typeId);
        let types = await this.elementTypeDAO.getTypes();
        let typeName = types.find(t => { return t._id == typeId })!.name;
        let collection = new PYCollectionDTO(
            typeName,
            elements.map(element => new PYCollectionElementDTO(element.title, element.image))
        )
        return collection;
    }
}