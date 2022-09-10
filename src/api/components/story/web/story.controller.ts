import { ServerResponse } from "../../../abstract/server.response";
import { PYStoryDTO } from "../dtos/story.dto";
import { PYStoryService } from "../service/story.service";

export class PYStoryController {
    async get(req: any, res: any) {
        let service = new PYStoryService();
        let id = req.query.id;
        let result = await service.getStory(id);
        let response: ServerResponse<PYStoryDTO> = {
            success: true,
            data: result
        }
        res.status(200).send(response);
    }
}