import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "@lastui/rocker/bootstrap";
import { getContext } from "./service";

window.requestAnimationFrame(() => {
  const root = ReactDOM.createRoot(document.getElementById("mount"));

  const main = <Main fetchContext={getContext} contextRefreshInterval={5 * 1000} />;

  root.render(main);
});
