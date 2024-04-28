import React, { useEffect, Fragment, useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";

import { connect } from "react-redux";

const Login = ({ users, dispatch }) => {
  const { Option } = Select;
  const [selectedUser, setSelectedUser] = useState("");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form
      name="login"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        name="select"
        label="Select"
        className="center"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select a user!",
          },
        ]}
      >
        <Select onChange={handleChange} placeholder="Please select a user">
          {users.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        className="center"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.values(users),
  };
};
export default connect(mapStateToProps)(Login);
