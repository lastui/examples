export default () => {
	console.log('simple middleware applied')
	return (store) => {
		console.log('simple middleware got store reference')
		return (next) => (action) => {
			console.log('simple middleware observes action', action)
			return next(action);
		};
	};
};
