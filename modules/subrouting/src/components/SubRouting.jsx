import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Route, useRouteMatch, useLocation, actions } from "@lastui/rocker/platform";

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
  const match = useRouteMatch("/:part");

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
        <pre>{JSON.stringify(match, null, 4)}</pre>
      </section>
      <Route path="/sub" component={Sub} />
      <Route index component={Main} />
    </React.Fragment>
  );
};

export default SubRouting;