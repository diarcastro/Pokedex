import AppActionType from 'enums/app';
import { Pokemon } from './pokemon';

export interface GlobalAppState {
  currentPage: number;
  pokemons: Pokemon[];
}

export interface GlobalAppStatePayload {
  currentPage?: number;
  pokemons?: Pokemon[];
}

export interface AppState {
  app: GlobalAppState;
}

export interface AppStateStoreAction {
  type: AppActionType;
  payload?: GlobalAppStatePayload;
}
