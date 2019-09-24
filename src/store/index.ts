import {
  applyMiddleware,
  createStore,
  Store,
  DeepPartial,
  compose
} from "redux";
import thunk from "redux-thunk";
import { History } from "history";
import client from "../api/client";

import { routerMiddleware } from "connected-react-router";
import { createRootReducer, RootState } from "./reducer";

export type RootStore = Store<RootState>;
export interface ExtraArguments {
  client: typeof client;
}

export const configureStore = (
  history: History,
  preloadedState?: DeepPartial<RootState>
): RootStore => {
  const extraArguments: ExtraArguments = {
    client
  };
  const middlewares = [
    thunk.withExtraArgument(extraArguments),
    routerMiddleware(history)
  ];

  // if (process.env.NODE_ENV !== "production") {
  //   middlewares.push(require("redux-logger").createLogger()); // tslint:disable-line: no-require-imports
  // }

  return createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(...middlewares))
  );
};
