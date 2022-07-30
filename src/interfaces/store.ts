import AppActionType from 'enums/app';
import { Pokemon } from './pokemon';

export interface GlobalAppState {
  currentPage: number | null;
  pageItems: Pokemon[] | null;
  pokemons: Pokemon[];
}

export interface GlobalAppStatePayload {
  currentPage?: number | null;
  pokemons?: Pokemon[];
}

export interface AppState {
  app: GlobalAppState;
}

export interface AppStateStoreAction {
  type: AppActionType;
  payload?: GlobalAppStatePayload;
}
