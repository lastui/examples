import Simple from './components/Simple';
import reducer from './reducer';
import saga from './saga';
import './styles/index.css';

import { registerModule } from '@lastui/rocker/platform';

registerModule({
	Main: Simple,
	reducer,
	saga,
	props: {
		'info': 'declared property',
	},
})
