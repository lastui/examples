import React from 'react';

import { Module } from '@lastui/rocker/platform';

const Layout = () => {
	return (
		<div>
			{'Module layout here'}
			<Module name="localisation" />
			<Module name="simple" />
			<Module name="routing" />
		</div>
	);
}

export default Layout;