import React from 'react';

import { Module } from '@lastui/rocker/platform';

const Layout = (props) => {
	return (
		<React.Fragment>
			<Module name="self-state-ioc" />
			<Module name="localisation" />
			<Module name="simple" by_consumer="consumer layout declared this via <Module> component">
				child of simple provided from layout
			</Module>
			<Module name="broken" />
			<Module name="routing" />
		</React.Fragment>
	);
}

export default Layout;