import Simple from './components/Simple';
import reducer from './reducer';
import saga from './saga';

import { registerModule } from '@lastui/rocker/platform';

registerModule.call(__SANDBOX_SCOPE__, {
	MainView: Simple,
	reducer,
	saga,
	shared: {
		'from_simple': 'with_love',
	},
});