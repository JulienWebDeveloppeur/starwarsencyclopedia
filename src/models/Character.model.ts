export interface CharacterList {
  id: string;
  name: string;
}

export interface Character {
  id: string;
  name: string;
  birthYear: string;
  height: number;
  mass: number;
  homeworld: {name: string; id: string};
  filmConnection: {films: {title: string; id: string}[]};
}
