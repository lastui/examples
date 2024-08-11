import React from "react";
import { useDispatch } from "react-redux";

import { actions, Module } from "@lastui/rocker/platform";

const Layout = () => {
  const dispatch = useDispatch();

  const refreshContext = React.useCallback(() => dispatch(actions.refresh()), [dispatch]);

  return (
    <div className="container is-fluid">
      <section className="section is-small">
        <div className="content">
          <button className="button is-light is-info" onClick={refreshContext}>
            refresh context
          </button>
        </div>
        <Module name="self-state-ioc" />
        <Module name="failing-saga-boundary" />
        <Module name="trivial" />
        <Module name="localisation" />
        <Module name="simple" by_consumer="consumer layout declared this via <Module> component">
          child of simple provided from layout
        </Module>
        {React.createElement(Module, { name: "broken" })}
        <Module name="routing" />
      </section>
    </div>
  );
};
//<Module name="broken" />

export default Layout;
