import React from 'react';

import { Module } from '@lastui/rocker/platform';

const Layout = () => {
	return (
		<div>
			{'Module layout here'}
			<Module name="simple" />
			<Module name="routing" />
		</div>
	);
}

Layout.displayName = "Layout";

export default Layout;