import { combineReducers } from 'redux';

import { AppStateStoreAction, GlobalAppState } from 'interfaces/store';
import AppActionType from 'enums/app';

const AppState: GlobalAppState = {};

const appReducer = (
  state:GlobalAppState = AppState,
  action: AppStateStoreAction | null = null,
) => {
  const { type: actionType } = action || {};
  switch (actionType) {
    case AppActionType.DUMMY_STATE:
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
