import React from 'react';

import { constants } from "@lastui/rocker/platform";
import { useSelector, useDispatch } from 'react-redux'

import { Module } from '@lastui/rocker/platform';

const Layout = (props: any) => {
	
	const dispatch = useDispatch()

	const refreshContext = React.useCallback(() => dispatch({ type: constants.REFRESH }), [dispatch]);

	return (
		<React.Fragment>
			<section
				style={{
					padding: '0.5em',
					background: 'rgba(0,0,0,.1)',
					marginBottom: '0.5em',
				}}
			>
				<p
					style={{
						margin: 0,
					}}
				>	Platform constant visible from module
				</p>
				<pre
					style={{
						margin: 0,
					}}
				>
					{JSON.stringify(constants, null, 4)}
				</pre>
			</section>
			<button onClick={refreshContext}>refresh context</button>
			<Module name="self-state-ioc" />
			<Module name="failing-saga-boundary" />
			<Module name="localisation" />
			<Module name="simple" by_consumer="consumer layout declared this via <Module> component">
				child of simple provided from layout
			</Module>
			<Module name="broken" />
			<Module name="routing" />
		</React.Fragment>
	)
};

export default Layout;