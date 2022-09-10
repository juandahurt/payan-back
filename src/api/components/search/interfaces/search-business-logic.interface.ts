import { SearchResultDTO } from "../dtos/search-result.dto";

export interface SearchBusinessLogic {
    search(text: string): Promise<SearchResultDTO[]>
}