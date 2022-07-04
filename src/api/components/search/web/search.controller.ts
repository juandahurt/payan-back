import { ServerResponse } from "../../../abstract/server.response";
import { SearchResultDTO } from "../dtos/search-result.dto";
import { SearchService } from "../service/search.service";

export class SearchController {
    async search(req: any, res: any) {
        let service = new SearchService();
        let query = req.query.q;
        let result = await service.search(query);
        let response: ServerResponse<SearchResultDTO[]> = {
            success: true,
            data: result
        }
        res.status(200).send(response);
    }
}