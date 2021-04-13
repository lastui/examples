import React from 'react';

import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const A = () => <div>A</div>
const B = () => <div>B</div>

const Routing = () => {
	const sharedState = useSelector((state) => state.shared);

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
			{JSON.stringify(sharedState)}
		</div>
	);
}

export default Routing;