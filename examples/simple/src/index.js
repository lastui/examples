import View from './components/View';
import rootSaga from './saga';

import { registerModule } from '@lastui/rocker/platform';

registerModule.call(__SANDBOX_SCOPE__, {
	MainView: View,
	saga: rootSaga,
});