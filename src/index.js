import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import "./styles/index.scss"

import reducer from "./reducers";
import { loadState, saveState } from "./utils/local-storage";

import Header from "./components/common/header";
import Sidebar from "./components/common/side-bar";
import Home from "./components/pages/home";
import Products from "./components/pages/products";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
);

store.subscribe(() => {
  saveState(store.getState());
});

const App = props => {
  return(
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <div className="app-container">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));