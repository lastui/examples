import Simple from './components/Simple';
import reducer from './reducer';
import saga from './saga';
import './styles/index.css';

import { registerModule } from '@lastui/rocker/platform';

registerModule.call(__SANDBOX_SCOPE__, {
	Main: Simple,
	reducer,
	saga,
	props: {
		'info': 'declared property',
	},
});