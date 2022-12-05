import React, { useContext } from 'react';
import { FaLanguage } from 'react-icons/fa';
import LocaleContext from '../../contexts/LocaleContext';

export default function LangToggle() {
	const { locale, toggleLocale } = useContext(LocaleContext);

	return (
		<button
			type='button'
			title={locale === 'id' ? 'ID' : 'EN'}
			className='toggle-locale'
			onClick={toggleLocale}
		>
			<FaLanguage />
		</button>
	)
};