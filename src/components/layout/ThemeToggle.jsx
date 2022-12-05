import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggle() {
	const [theme, changeTheme] = useTheme();

	return (
		<button
			type='button'
			className='toggle-theme'
			onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{
				theme === 'dark' ? <FaMoon /> : <FaSun/>
			}
		</button>
	)
};