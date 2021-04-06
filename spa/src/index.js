import React from "react";
import ReactDOM from "react-dom";
import { Main } from "@lastui/rocker/runtime";
import { getContext } from "./service";

window.addEventListener("load", (event) => {
	const main = <Main fetchContext={getContext} />;
	ReactDOM.render(main, document.getElementById("mount"));
});
