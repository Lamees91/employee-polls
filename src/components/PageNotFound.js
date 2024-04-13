import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";

const PageNotFound = () => {
  return <div>PageNotFound Page</div>;
};

const mapStateToProps = () => ({});
export default connect(mapStateToProps)(PageNotFound);
