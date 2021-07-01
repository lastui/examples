import Crashing from './components/Crashing';
import Fallback from './components/Fallback';

import { registerModule } from '@lastui/rocker/platform';

registerModule.call(__SANDBOX_SCOPE__, {
	Main: Crashing,
	Error: Fallback,
});