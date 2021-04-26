import React from 'react';

import { Module } from '@lastui/rocker/platform';

const Layout = (props) => {
	return (
		<React.Fragment>
			<Module name="localisation" />
			<Module name="simple">
				child of simple provided from layout
			</Module>
			<Module name="broken" />
			<Module name="routing" />
			{`metadata of layout -> ${props.info}`}
		</React.Fragment>
	);
}

export default Layout;