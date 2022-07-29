export interface Pokemon {
  id: number;
  name: string;
  image: string;
  url: string;
}

export interface PokemonResponseData {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
