import React from 'react';

import { Route } from '@lastui/rocker/platform';

const Main = () => <div>Sub-A</div>
const Sub = () => <div>Sub-B</div>

const SubRouting = () => (
	<React.Fragment>
		<div>
			Module Sub-Routing here
		</div>
		<Route path="/sub" component={Sub} />
		<Route exact path="/" component={Main} />
	</React.Fragment>
);

export default SubRouting;