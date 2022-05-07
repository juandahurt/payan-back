import { ServerResponse } from "../../../abstract/server.response";
import { PYElementPageDTO } from "../dtos/element-page.dto";
import { PYElementService } from "../service/element.service";

export class PYElementController {
    async getElement(req: any, res: any) {
        let service = new PYElementService();
        let id = req.query.id;
        let feedLayout = await service.buildLayout(id);
        let response: ServerResponse<PYElementPageDTO> = {
            success: true,
            data: feedLayout
        }
        res.status(200).send(response);
    }
}