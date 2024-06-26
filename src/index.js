import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./components/App";
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

const root = document.getElementById("root");

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
