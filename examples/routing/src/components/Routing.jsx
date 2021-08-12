import React from 'react';

import { Module, Route, Link } from '@lastui/rocker/platform';

const A = () => <div>A</div>
const B = () => <Module name="subrouting" />

const Routing = () => (
	<div>
		Module routing here
		<Route path="/b" component={B} />
		<Route exact path="/" component={A} />
		<div>
			<Link to="/b">
				nav /b
			</Link>
		</div>
		<div>
			<Link to="/b/sub">
				nav /b/sub
			</Link>
		</div>
		<div>
			<Link to="/">
				nav /
			</Link>
		</div>
	</div>
);

export default Routing;