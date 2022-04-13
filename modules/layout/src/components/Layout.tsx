import React from 'react';

import { actions } from "@lastui/rocker/platform";
import { useSelector, useDispatch } from 'react-redux'

import { Module } from '@lastui/rocker/platform';

const Layout = (props: any) => {
	
	const dispatch = useDispatch()

	const refreshContext = React.useCallback(() => dispatch(actions.refresh()), [dispatch]);

	return (
		<React.Fragment>
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