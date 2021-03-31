import Routing from './components/Routing';

import { registerModule } from '@lastui/rocker/platform';

registerModule.call(__SANDBOX_SCOPE__, {
	MainView: Routing,
});