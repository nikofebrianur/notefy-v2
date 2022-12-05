import React from 'react';
import { Link } from 'react-router-dom';
import useLang from '../../hooks/useLang';
import NavMenu from './NavMenu';

export default function Header() {
	const text = useLang('app');

	return (
		<header>
			<h1>
				<Link to='/'>{text.title}
				</Link>
			</h1>
			<NavMenu />
		</header>
	)
};