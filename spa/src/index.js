import React from "react";
import ReactDOM from "react-dom";
import { Main } from "@lastui/rocker/runtime";
import { getContext } from "./service";

async function initialize() {	
	require('@formatjs/intl-numberformat/polyfill');
	require('@formatjs/intl-numberformat/locale-data/en');
	require('@formatjs/intl-numberformat/locale-data/cs');

	require('@formatjs/intl-relativetimeformat/polyfill');
	require('@formatjs/intl-relativetimeformat/locale-data/en');
	require('@formatjs/intl-relativetimeformat/locale-data/cs');

	return null
}

window.addEventListener("load", (event) => {
	const main = (
		<Main
			initializeRuntime={initialize}
			fetchContext={getContext}
		/>
	);
	ReactDOM.render(main, document.getElementById("mount"));
});
