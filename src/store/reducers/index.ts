import { combineReducers } from 'redux';
import _isNil from 'lodash/isNil';

import { AppStateStoreAction, GlobalAppState } from 'interfaces/store';
import { Pokemon } from 'interfaces/pokemon';
import AppActionType from 'enums/app';
import { ApiConfig } from 'config';

const { limit } = ApiConfig;

const AppState: GlobalAppState = {
  currentPage: 0,
  pageItems: [],
  pokemons: [],
};

const appReducer = (
  state:GlobalAppState = AppState,
  action: AppStateStoreAction | null = null,
) => {
  const {
    currentPage: stateCurrentPage,
  } = state || {};
  const {
    type: actionType,
    payload: {
      currentPage = null,
      pokemons = [],
    } = {},
  } = action || {};
  switch (actionType) {
    case AppActionType.SET_CURRENT_PAGE:
      return { ...state, currentPage: currentPage || stateCurrentPage };
    case AppActionType.SET_POKEMONS: {
      let pageItems:Pokemon[] = [];
      if (!_isNil(stateCurrentPage) && pokemons.length) {
        const sliceStart = Number(stateCurrentPage) * limit;
        const sliceEnd = sliceStart + limit;
        pageItems = pokemons.slice(sliceStart, sliceEnd);
      }

      return { ...state, pokemons, pageItems };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
