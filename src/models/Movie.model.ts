import {CharacterList} from './Character.model';

export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  openingCrawl: string;
  speciesConnection: {totalCount: number};
  planetConnection: {totalCount: number};
  vehicleConnection: {totalCount: number};
  characterConnection: {characters: CharacterList[]};
}

export interface MovieListItem {
  id: string;
  title: string;
  releaseDate: string;
  openingCrawl: string;
}
