import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//etape 1: importer redux
import { Provider } from "react-redux";
//etape 4: creer le store
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import minionsReducer from "./store/reducers/minions";
import saveReducer from "./store/reducers/save";
import thunk from "redux-thunk";

//combiner les reducers
const reducer = combineReducers({
  minion: minionsReducer,
  save: saveReducer,
});
//Creation du middlewares
const middleware = (store) => {
  return (next) => {
    return (action) => {
      console.log(action);
      return next(action);
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,

  composeEnhancers(applyMiddleware(middleware, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
