import React from 'react';
import { useDispatch } from 'react-redux';
import { constants } from '@lastui/rocker/platform';
import { FormattedMessage, FormattedTime, useIntl } from 'react-intl';

const Localised = () => {
	const intl = useIntl()
	const dispatch = useDispatch();

	const changeLanguage = (event) => {
		dispatch({
			type: constants.SET_LANGUAGE,
			payload: {
				language: event.target.value,
			},
		});
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