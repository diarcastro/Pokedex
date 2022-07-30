export interface PokemonBase {
  id: number;
  name: string;
  image: string;
  url: string;
}

export interface Pokemon extends PokemonBase {
}

export interface PokemonResponseData {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
