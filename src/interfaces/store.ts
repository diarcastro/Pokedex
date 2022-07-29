import AppActionType from 'enums/app';

export interface GlobalAppState {
}

export interface AppState {
  app: GlobalAppState;
}

export interface AppStateStoreAction {
  type: AppActionType;
  payload?: GlobalAppState;
}
