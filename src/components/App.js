import React, { useEffect, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import handleInitialData from "../actions/shared";
import loginPage from "./LoginPage";
import "./App.css";

const App = ({ authorized, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authorized: authedUser !== null,
});
export default connect(mapStateToProps)(App);
