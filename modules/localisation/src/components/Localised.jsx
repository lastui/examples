import React from "react";
import { FormattedMessage, FormattedTime, useIntl } from "react-intl";
import { useDispatch } from "react-redux";

import { actions } from "@lastui/rocker/platform";

const Localised = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const changeLanguage = React.useCallback(
    (event) => {
      dispatch(actions.setLanguage(event.target.value));
    },
    [dispatch],
  );

  return (
    <div>
      <div>
        <select onChange={changeLanguage} value={intl.locale}>
          <option value="en-US">English</option>
          <option value="cs-CZ">Česky</option>
        </select>
      </div>
      <div>
        <FormattedMessage id="module.localisation.foo" />
      </div>
      <div>
        <FormattedTime value={Date.now()} />
      </div>
    </div>
  );
};

export default Localised;
