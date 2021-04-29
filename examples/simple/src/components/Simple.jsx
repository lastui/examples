import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from './theme';
import { Module } from '@lastui/rocker/platform';

const Simple = (props) => {
	const count = useSelector((state) => state.ticker)

	return (
		<div className="simple">
			<div>
				{`elapsed ${count}...`}
			</div>
			<Title count={count}>
				styled controled by props
			</Title>
			<div>
				{`info: ${props.info}`}
			</div>
			<Module name="nonexistant" />
			{props.children}
		</div>
	);
}

export default Simple;