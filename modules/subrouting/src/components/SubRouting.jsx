import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, Link, Route, Routes } from "react-router-dom";

import { Module, actions } from "@lastui/rocker/platform";

const Main = () => {
  const sharedState = useSelector((state) => state.shared);
  return (
    <div>
      <p>Shared state is</p>
      <code>{JSON.stringify(sharedState, null, 4)}</code>
    </div>
  );
};

const Sub = () => <div>Sub here and my match is</div>;

const SubRouting = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();

  React.useEffect(() => {
    dispatch(actions.setShared({ routing: "exits" }));
  }, [dispatch]);

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
