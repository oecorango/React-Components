export interface SWPeople {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface SWData {
  count: number;
  next: string;
  previous: string;
  results: SWPeople[];
}

export type State = {
  isLoaded: boolean;
  persons: SWPeople[];
};

export type Props = object;
