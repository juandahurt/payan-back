import { ServerResponse } from "../../../abstract/server.response";
import { PYUnknownError } from "../../../common/errors/server.errors";
import { PYFeedPageDTO } from "../dtos/feed-page.dto";
import { PYFeedService } from "../services/feed.service";

export class PYFeedController {
    async getFeed(req: any, res: any) {
        try {
            let service = new PYFeedService();
            let feedPage = await service.buildFeedPage();
            let response: ServerResponse<PYFeedPageDTO> = {
                success: true,
                data: feedPage
            }
            res.status(200).send(response);
        } catch(e) {
            let error = new PYUnknownError();
            let response: ServerResponse<null> = {
                success: false,
                error: error
            }
            res.status(error.httpCode).send(response);
        }
    }
}