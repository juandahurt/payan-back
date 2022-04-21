import { json } from "express";
import { ServerResponse } from "../../../abstract/server.response";
import { PYFeedBusinessLogic } from "../interfaces/feed-business-logic.interface";
import { PYFeedPage } from "../models/feed-page.model";
import { PYFeedService } from "../services/feed.service";

export class PYFeedController {
    async getFeed(req: any, res: any) {
        let service = new PYFeedService();
        let feedLayout = await service.buildFeedLayout();
        let response: ServerResponse<PYFeedPage> = {
            success: true,
            data: feedLayout
        }
        res.status(200).send(response);
    }
}