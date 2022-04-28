import { ServerResponse } from "../../../abstract/server.response";
import { PYCollectionDTO } from "../dtos/collection.dto";
import { PYCollectionBusinessLogic } from "../interfaces/collection-business-logic.interface";
import { PYCollectionService } from "../service/collection.service";

export class PYCollectionController {
    async getCollectionByTypeId(req: any, res: any) {
        let service = new PYCollectionService();
        let collection = await service.getCollectionByTypeId(req.query.typeId);
        let response: ServerResponse<PYCollectionDTO> = {
            success: true,
            data: collection
        }
        res.status(200).send(response);
    }
}