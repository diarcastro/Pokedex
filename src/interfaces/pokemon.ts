export interface PokemonStat {
  name: string;
  base: number;
  effort: number;
}

export interface PokemonBase {
  id: number;
  name: string;
  image: string;
  url: string;
  height?: number;
  types?: string[];
  weight?: number;
  baseExperience?: number;
  abilities?: string[];
  stats?: PokemonStat[];
}

export interface Pokemon extends PokemonBase {
  evolutionChain?: string;
  evolutionChainId?: number;
  evolutions?: Pokemon[];
}

export interface PokemonResponseData extends PokemonBase {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
  chain: EvolutionChain;
  evolution_chain: {
    url: string;
  };
}

export interface EvolutionChainSpecie {
  name: string;
  url: string;
}

export interface EvolutionChain {
  species: EvolutionChainSpecie;
  evolves_to: EvolutionChain[];
}
