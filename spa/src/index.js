import React from "react";
import ReactDOM from "react-dom";
import { Main } from "@lastui/rocker/bootstrap";
import { getContext } from "./service";

window.requestAnimationFrame(() => {
	/*
	// TODO once react 18 if RC
	const root = ReactDOM.createRoot(document.getElementById("mount"));

	const main = (
		<Main fetchContext={getContext} />
	);
	root.render(main);
	*/

	const main = (
		<Main fetchContext={getContext} contextRefreshInterval={5 * 1000} />
	);
	ReactDOM.render(main, document.getElementById("mount"));
});
