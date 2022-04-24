import React from "react";
import { useSelector } from "react-redux";

const Probe = (props) => {
  const value = useSelector((state) => state.fixed.some.nested.thing);
  return value;
};

export default Probe;
