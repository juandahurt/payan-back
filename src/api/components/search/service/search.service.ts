import { PYHeroDocument } from "../../hero/dal/hero.document";
import heroSchema from "../../hero/dal/hero.schema";
import { PYPlaceDocument } from "../../place/dal/place.document";
import placeSchema from "../../place/dal/place.schema";
import { SearchResultItem } from "../dtos/search-result-item.dto";
import { SearchResultDTO } from "../dtos/search-result.dto";
import { SearchBusinessLogic } from "../interfaces/search-business-logic.interface";

export class SearchService implements SearchBusinessLogic {
    async search(query: string): Promise<SearchResultDTO[]> {
      let result: SearchResultDTO[] = [];
      const regex = new RegExp(this.escapeRegex(query), 'gi');

      let places = await placeSchema.find({ title: {
        $regex: regex
      } });
      let heroes = await heroSchema.find({ name: {
        $regex: regex
      } });
      let placeItems = places.map((place: PYPlaceDocument) => {
        return new SearchResultItem(
          place.title,
          "payan://place?id=" + place.id
        );
      });
      let heroItems = heroes.map((hero: PYHeroDocument) => {
        return new SearchResultItem(
          hero.name,
          "payan://hero?id=" + hero.id
        );
      });
      let placeResult = new SearchResultDTO("Lugares", placeItems);
      if (placeResult.items.length > 0) {
        result.push(placeResult);
      }
      let heroResult = new SearchResultDTO("Próceres", heroItems);
      if (heroResult.items.length > 0) {
        result.push(heroResult);
      }

      return result;
    }

    escapeRegex(text: string) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
}