import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "@lastui/rocker/bootstrap";
import { getContext } from "./service";

import "bulma/css/bulma.css";

const root = ReactDOM.createRoot(document.getElementById("mount"));

const main = <Main fetchContext={getContext} contextRefreshInterval={60 * 1000} />;

root.render(main);