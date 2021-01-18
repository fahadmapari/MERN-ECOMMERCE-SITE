import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ w, h }) => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: w,
        height: h,
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading..</span>
    </Spinner>
  );
};

Loader.defaultProps = {
  w: "100px",
  h: "100px",
};

export default Loader;
