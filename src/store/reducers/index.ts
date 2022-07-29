import { combineReducers } from 'redux';

import { AppStateStoreAction, GlobalAppState } from 'interfaces/store';
import AppActionType from 'enums/app';

const AppState: GlobalAppState = {
  currentPage: 1,
  pokemons: [],
};

const appReducer = (
  state:GlobalAppState = AppState,
  action: AppStateStoreAction | null = null,
) => {
  const {
    type: actionType,
    payload: {
      pokemons = [],
    } = {},
  } = action || {};
  switch (actionType) {
    case AppActionType.SET_POKEMONS:
      return { ...state, pokemons };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
