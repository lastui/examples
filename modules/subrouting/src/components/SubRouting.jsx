import React from 'react';

import { Route, useRouteMatch, useLocation } from '@lastui/rocker/platform';

const Main = () => <div>Main here</div>
const Sub = () => {
	const match = useRouteMatch('/:part');
	const location = useLocation();

	console.log('/:part match yields', match, 'in location', location);

	return (
		<section
			style={{
				padding: '0.5em',
				background: 'rgba(0,0,0,.1)',
			}}
		>
			<p>Sub here and my match is</p>
			<code>{JSON.stringify(match, null, 4)}</code>
		</section>
	);
}

const SubRouting = () => (
	<React.Fragment>
		<div>
			Module Sub-Routing here
		</div>
		<Route path="/sub" component={Sub} />
		<Route index component={Main} />
	</React.Fragment>
);

export default SubRouting;