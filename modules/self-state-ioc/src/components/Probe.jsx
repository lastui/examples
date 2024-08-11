import React from "react";
import { useSelector } from "react-redux";

const Probe = (props) => {
  const value = useSelector((state) => state.fixed.some.nested.thing);
  return `ioc-${value}`;
};

export default Probe;
