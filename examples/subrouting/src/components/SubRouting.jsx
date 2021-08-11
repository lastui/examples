import React from 'react';

import { Route } from 'react-router';





import { useRouteMatch } from 'react-router-dom';


const Main = () => <div>Sub-A</div>
const Sub = () => <div>Sub-B</div>

const SubRouting = () => {
	let match = useRouteMatch();

	return (
		<React.Fragment>
			<div>
				Module Sub-Routing here
			</div>
			<Route path={`${match.url}/sub`} component={Sub} />
			<Route exact path={`${match.url}/`} component={Main} />
		</React.Fragment>
	);
}

export default SubRouting;