import { combineReducers } from 'redux';
import _isNil from 'lodash/isNil';

import { AppStateStoreAction, GlobalAppState } from 'interfaces/store';
import AppActionType from 'enums/app';
import { ApiConfig } from 'config';
import { Pokemon } from 'interfaces/pokemon';

const { itemsPerPage } = ApiConfig;

const AppState: GlobalAppState = {
  currentPage: 0,
  pageItems: null,
  pokemons: [],
};

const appReducer = (
  state:GlobalAppState = AppState,
  action: AppStateStoreAction | null = null,
) => {
  const {
    currentPage: stateCurrentPage,
    pokemons: statePokemons,
  } = state || {};
  const {
    type: actionType,
    payload: {
      currentPage = null,
      pokemons = [],
    } = {},
  } = action || {};

  const makePageItems = (page: number, items: Pokemon[]) => {
    if (!_isNil(page) && items.length) {
      const sliceStart = Number(page) * itemsPerPage;
      const sliceEnd = sliceStart + itemsPerPage;
      return items.slice(sliceStart, sliceEnd);
    }

    return null;
  };
  switch (actionType) {
    case AppActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage,
        pageItems: makePageItems(currentPage || 0, statePokemons),
      };
    case AppActionType.SET_POKEMONS: {
      return {
        ...state,
        pokemons,
        pageItems: makePageItems(stateCurrentPage || 0, pokemons),
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
