import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const NavBar = ({ authedUser }) => {
  const navigate = useNavigate();

  // const onChange = (key) => {
  //   console.log(key);
  // };
  const onChange = (key) => {
    console.log(key);
    switch (key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/leaderboard");
        break;
      case "3":
        navigate("/add");
        break;
    }
  };
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Home",
          },
          {
            key: "2",
            label: "Leaderboard",
          },
          {
            key: "3",
            label: "New poll",
          },
        ]}
        onChange={onChange}
      />
      <button class="signout-button">Logout</button>
    </>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser: users[authedUser],
});

export default connect(mapStateToProps)(NavBar);
