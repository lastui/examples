import React from "react";
import { useSelector } from "react-redux";
import { Title } from "./theme";
import { Module } from "@lastui/rocker/platform";

const Simple = (props) => {
  const count = useSelector((state) => state.ticker);

  return (
    <div className="notification simple">
      <div>{`elapsed ${count}...`}</div>
      <Title count={count}>style controled by props</Title>
      <div>{`declared property via consumer: ${props.by_consumer}`}</div>
      <Module name="nonexistant" />
      {props?.foo?.bar}
      {props.children}
    </div>
  );
};

export default Simple;