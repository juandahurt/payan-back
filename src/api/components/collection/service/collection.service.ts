import { PYElementTypeDAO } from "../../element-type/dal/element-type.dao";
import { PYElementDAO } from "../../element/dal/element.dao";
import { PYCollectionElementDTO } from "../dtos/collection-element.dto";
import { PYCollectionDTO } from "../dtos/collection.dto";
import { PYCollectionBusinessLogic } from "../interfaces/collection-business-logic.interface";
import { PYCollectionLayout } from "../models/collection-layout.model";

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
            elements.map(element => new PYCollectionElementDTO(element.title, element.image)),
            elements.length > 10 ? PYCollectionLayout.normal : PYCollectionLayout.oversized
        )
        return collection;
    }
}