import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Result } from "antd";

const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(PageNotFound);
