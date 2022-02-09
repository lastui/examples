import React from "react";

import { createPath, createLocation } from 'history';

import { Module, Route, Redirect, Link } from "@lastui/rocker/platform";

const A = (props) => (
	<div>A</div>
);

const B = (props) => (
	<React.Fragment>
		<div>B</div>
		<Module name="subrouting" />
	</React.Fragment>
);

const Routing = () => {
	return (
		<div>
			Module routing here
			<Route path="/b" component={B} />
			<Route path="/a" component={A} />
			<Redirect from="/" to="/a" />
			<div>
				<Link to="/b">nav /b</Link>
			</div>
			<div>
				<Link to="/b/sub">nav /b/sub</Link>
			</div>
			<div>
				<Link to="/">nav /</Link>
			</div>
		</div>
	);
};

export default Routing;
