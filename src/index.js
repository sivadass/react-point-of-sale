import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import "./styles/index.scss";

import reducer from "./reducers";
import {navigatorOnLine} from './actions/network-status';
import { loadState, saveState } from "./utils/local-storage";

import Header from "./components/common/header";
import Sidebar from "./components/common/side-bar";
import Home from "./components/pages/home";
import Categories from "./components/pages/categories";
import ProductsList from "./components/pages/products/products-list";
import EditProduct from "./components/pages/products/edit-product";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

function listenToWindowEvent(name, mapEventToAction) {
  return function (dispatch) {
    function handleEvent(e) {
      dispatch(mapEventToAction(e));
    }
    window.addEventListener(name, handleEvent);
  }
}

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(...middleware)
);

store.dispatch(listenToWindowEvent('load', navigatorOnLine));
store.dispatch(listenToWindowEvent('offline', navigatorOnLine));
store.dispatch(listenToWindowEvent('online', navigatorOnLine));

store.subscribe(() => {
  saveState(store.getState());
});

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <div className="app-container">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={ProductsList} />
              <Route exact path="/products/:id/edit" component={EditProduct} />
              <Route exact path="/categories" component={Categories} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
