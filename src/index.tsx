import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { configureStore } from "./store/index";
import { routes } from "./router/routes";
import { render } from "react-dom";
import { createBrowserHistory } from "history";
import { renderRoutes } from "react-router-config";
import { AppShell } from "./components/elements/AppShell";

const history = createBrowserHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppShell>{renderRoutes(routes)}</AppShell>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
