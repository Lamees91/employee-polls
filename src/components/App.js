import React, { useEffect, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import handleInitialData from "../actions/shared";
import "./App.css";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Login from "./LoginPage";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import QuestionVote from "./QuestionVote";
import NewPoll from "./NewPoll";
import PageNotFound from "./PageNotFound";

const App = ({ authorized, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      ></Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div>
          <Routes>
            {authorized ? (
              <Fragment>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/add" element={<NewPoll />} />
                <Route path="/question/:id" element={<QuestionVote />} />
                <Route path="*" element={<PageNotFound />} />
              </Fragment>
            ) : (
              <Fragment>
                <Route path="*" element={<Login />} />
              </Fragment>
            )}
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          minHeight: 280,
          padding: 24,
        }}
      >
        Employee Poll ©{new Date().getFullYear()} Created by Lamees Osama
      </Footer>
    </Layout>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authorized: authedUser !== null,
});
export default connect(mapStateToProps)(App);
