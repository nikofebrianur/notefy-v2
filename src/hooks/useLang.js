import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import content from '../utils/content';

function useLang(page) {
	const { locale } = useContext(LocaleContext);

	return content[`${page}Page`][locale]
}

export default useLang;