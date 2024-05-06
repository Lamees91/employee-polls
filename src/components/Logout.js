import React from "react";
import { connect } from "react-redux";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { setAuthedUser } from "../actions/authedUser";

const Logout = ({ name, avatarURL, dispatch }) => {
  const handleLogout = () => {
    dispatch(setAuthedUser(null));
  };

  return (
    <div class="logout-div">
      <Avatar icon={<UserOutlined />} />
      <Button class="ant-btn-primary" size="small" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  name: users[authedUser].name,
  avatarURL: users[authedUser].avatarURL,
});
export default connect(mapStateToProps)(Logout);
