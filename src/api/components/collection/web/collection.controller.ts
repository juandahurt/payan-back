import { ServerResponse } from "../../../abstract/server.response";
import { PYCollectionDTO } from "../dto/collection.dto";
import { PYCollectionService } from "../services/collection.service";

export class PYCollectionController {
    async getCollection(req: any, res: any) {
        let type = req.query.type;
        let category_code = req.query.category_code;
        let service = new PYCollectionService();
        let feedPage = await service.getCollection(type, category_code)
        let response: ServerResponse<PYCollectionDTO> = {
            success: true,
            data: feedPage
        }
        res.status(200).send(response);
    }
}