import { ServerResponse } from "../../../abstract/server.response";
import { PYHeroDTO } from "../dtos/hero.dto";
import { PYHeroService } from "../services/hero.service";

export class PYHeroController {
    async getHero(req: any, res: any) {
        let service = new PYHeroService();
        let feedPage = await service.getHero(req.query.id);
        let response: ServerResponse<PYHeroDTO> = {
            success: true,
            data: feedPage
        }
        res.status(200).send(response);
    }
}