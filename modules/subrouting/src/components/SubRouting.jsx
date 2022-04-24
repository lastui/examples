import React from "react";

import { Route, useRouteMatch, useLocation } from "@lastui/rocker/platform";

const Main = () => <div>Main here</div>;
const Sub = () => <div>Sub here and my match is</div>;

const SubRouting = () => {
  const match = useRouteMatch("/:part");

  return (
    <React.Fragment>
      <div></div>
      <section
        style={{
          padding: "0.5em",
          background: "rgba(0,0,0,.1)",
        }}>
        <p>Module Sub-Routing here match is</p>
        <code>{JSON.stringify(match, null, 4)}</code>
      </section>
      <Route path="/sub" component={Sub} />
      <Route index component={Main} />
    </React.Fragment>
  );
};

export default SubRouting;
