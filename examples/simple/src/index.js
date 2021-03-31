import Simple from './components/Simple';
//import rootSaga from './saga';

import { registerModule } from '@lastui/rocker/platform';

registerModule.call(__SANDBOX_SCOPE__, {
	MainView: Simple,
	//saga: rootSaga,
});