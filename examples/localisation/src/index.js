import Localised from './components/Localised';

import { registerModule } from '@lastui/rocker/platform';

registerModule.call(__SANDBOX_SCOPE__, {
	MainView: Localised,
	locale: {
		'en-US': require('./messages/en-US.json'),
		'cs-CZ': require('./messages/cs-CZ.json'),
	}
});