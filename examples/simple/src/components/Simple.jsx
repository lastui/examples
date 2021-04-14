import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from './theme';
import { Module } from '@lastui/rocker/platform';

const Simple = () => {
	const count = useSelector((state) => state.ticker)

	return (
		<div className="simple">
			{`elapsed ${count}...`}
			<Title count={count}>
				styled controled by props
			</Title>
			<Module name="nonexistant" />
		</div>
	);
}

export default Simple;