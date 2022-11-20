import {CharacterListItem} from './Character.model';

export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  openingCrawl: string;
  speciesConnection: {totalCount: number};
  planetConnection: {totalCount: number};
  vehicleConnection: {totalCount: number};
  characterConnection: {characters: CharacterListItem[]};
}

export interface MovieListItem {
  id: string;
  title: string;
  releaseDate?: string;
  openingCrawl?: string;
}
