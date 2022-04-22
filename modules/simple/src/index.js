import Simple from './components/Simple';
import reducer from './reducer';
import middleware from './middleware';
import saga from './saga';
import './styles/index.css';

import { registerModule } from '@lastui/rocker/platform';

registerModule({
	Main: Simple,
	reducer: reducer,
	middleware,
	saga,
})