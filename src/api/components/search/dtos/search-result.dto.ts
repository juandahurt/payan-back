import { SearchResultItem } from "./search-result-item.dto";

export class SearchResultDTO {
    title: string;
    items: SearchResultItem[];

    constructor(title: string, items: SearchResultItem[]) {
        this.title = title;
        this.items = items;
    }
}