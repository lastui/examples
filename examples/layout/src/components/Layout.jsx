import React from 'react';

import { Module } from '@lastui/rocker/platform';

const Layout = () => {
	return (
		<React.Fragment>
			<Module name="localisation" />
			<Module name="simple">
				child of simple provided from layout
			</Module>
			<Module name="broken" />
			<Module name="routing" />
		</React.Fragment>
	);
}

export default Layout;