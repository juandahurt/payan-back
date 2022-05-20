import { ServerResponse } from "../../../abstract/server.response";
import { PYFeedPageDTO } from "../dtos/feed-page.dto";
import { PYFeedService } from "../services/feed.service";

export class PYFeedController {
    async getFeed(req: any, res: any) {
        let service = new PYFeedService();
        let feedPage = await service.buildFeedPage();
        let response: ServerResponse<PYFeedPageDTO> = {
            success: true,
            data: feedPage
        }
        res.status(200).send(response);
    }
}