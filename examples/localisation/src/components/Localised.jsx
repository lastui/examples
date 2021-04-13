import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@lastui/rocker/platform';
import { FormattedMessage, FormattedTime, useIntl } from 'react-intl';

const Localised = () => {
	const intl = useIntl()
	const dispatch = useDispatch();

	const changeLanguage = (event) => {
		dispatch(actions.setLanguage(event.target.value));
	};

	return (
		<div>
			<div>
				<select onChange={changeLanguage} value={intl.locale}>
                  <option value="en-US">English</option>
                  <option value="cs-CZ">Česky</option>
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