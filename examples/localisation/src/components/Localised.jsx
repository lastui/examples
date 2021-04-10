import React from 'react';
import { FormattedMessage, FormattedTime } from 'react-intl';

const Localised = () => {
	// FIXME useSelect to select current language
	// FIXME useDispatch to change current language

	const [language, setLanguage] = React.useState('en-US')
	//let language = 'en-US';
	const changeLanguage = (event) => {
		setLanguage(event.target.value);
	};

	return (
		<div>
			<div>
				<select onChange={changeLanguage} value={language}>
                  <option value="en-US">English</option>
                  <option value="cs">Czech</option>
               </select>
			</div>
			<div>
				<FormattedMessage id="module.localisation.foo" />
			</div>
			<div>
				<FormattedTime value={Date.now()} />
			</div>
		</div>
	);
}

export default Localised;