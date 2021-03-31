import React from 'react';

import { Route } from 'react-router';
import { Link } from 'react-router-dom';

const A = () => <div>A</div>
const B = () => <div>B</div>

const Routing = () => {
	return (
		<div>
			Module routing here
			<Route path="/a" component={A} />
			<Route exact path="/" component={B} />
			<div>
				<Link to="/a">
					nav /a
				</Link>
			</div>
			<div>
				<Link to="/">
					nav /
				</Link>
			</div>
		</div>
	);
}

Routing.displayName = "Routing";

export default Routing;