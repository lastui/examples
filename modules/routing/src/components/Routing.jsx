import React from "react";

import { createPath, createLocation } from "history";

import {
	Module,
	Route,
	Redirect,
	Link,
	useHistory,
} from "@lastui/rocker/platform";

const A = (props) => <div>A</div>;

const B = (props) => (
	<React.Fragment>
		<div>B</div>
		<Module name="subrouting" />
	</React.Fragment>
);

const Routing = () => {
	const history = useHistory();
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
				<a
					href="/never/should/happen"
					onClick={(e) => {
						e.preventDefault();
						history.push("/b/sub");
					}}
				>
					nav /b/sub
				</a>
			</div>
			<div>
				<Link to="/">nav /</Link>
			</div>
		</div>
	);
};

export default Routing;
