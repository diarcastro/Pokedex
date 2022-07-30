import { AppStateStoreAction } from 'interfaces/store';
import { Pokemon } from 'interfaces/pokemon';
import AppActionType from 'enums/app';

export const setPokemons = (pokemons: Pokemon[]): AppStateStoreAction => (
  { type: AppActionType.SET_POKEMONS, payload: { pokemons } }
);

export const setCurrentPage = (currentPage: number | null): AppStateStoreAction => (
  { type: AppActionType.SET_CURRENT_PAGE, payload: { currentPage } }
);
