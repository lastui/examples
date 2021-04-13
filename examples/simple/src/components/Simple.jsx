import React from 'react';
import { useSelector } from 'react-redux';
import { Title } from './theme';

const Simple = () => {
	const count = useSelector((state) => {
		console.log('state updated in ticker')
		return state.ticker;
	})

	return (
		<div className="simple">
			{`Module simple here ${count}`}
			<Title count={count}>
				I am styled component
			</Title>			
		</div>
	);
}

export default Simple;