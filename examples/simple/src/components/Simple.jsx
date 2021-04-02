import React from 'react';
import { useSelector } from 'react-redux';

const Simple = () => {
	const count = useSelector((state) => {
		console.log('state updated in ticker')
		return state.ticker;
	})

	return (
		<div>
			{`Module simple here ${count}`}
		</div>
	);
}

export default Simple;