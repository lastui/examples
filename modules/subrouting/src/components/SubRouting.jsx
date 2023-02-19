import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams, useLocation, Link, Route, Routes } from "react-router-dom";
import { Module, actions } from "@lastui/rocker/platform";

const Main = () => {
  const sharedState = useSelector((state) => state.shared);
  return (
    <div>
      <div>
        <p>Global shared state is</p>
        <code>{JSON.stringify(sharedState.global, null, 4)}</code>
      </div>
      <div>
        <p>Localised shared state is</p>
        <code>{JSON.stringify(sharedState.local, null, 4)}</code>
      </div>
    </div>
  );
};

const Sub = () => <div>Sub here and my match is</div>;

const SubRouting = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  const dispatchLocalShared = React.useCallback(() => dispatch(actions.setLocalShared({ info: "here" })), [dispatch]);
  const dispatchGlobalShared = React.useCallback(
    () => dispatch(actions.setGlobalShared({ routing: "exits" })),
    [dispatch],
  );

  React.useEffect(() => {
    dispatchLocalShared();
    dispatchGlobalShared();
  }, [dispatchLocalShared, dispatchGlobalShared]);

  return (
    <React.Fragment>
      <div></div>
      <section className="content is-small">
        <p>Module Sub-Routing here match is</p>
        <pre>{JSON.stringify({ location, params }, null, 4)}</pre>
      </section>
      <Routes>
        <Route path="sub" element={<Sub />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </React.Fragment>
  );
};

export default SubRouting;