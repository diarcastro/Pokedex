import { AppStateStoreAction } from 'interfaces/store';
import { Pokemon } from 'interfaces/pokemon';
import AppActionType from 'enums/app';

const setPokemons = (pokemons: Pokemon[]): AppStateStoreAction => (
  { type: AppActionType.SET_POKEMONS, payload: { pokemons } }
);

export default setPokemons;
