import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavMenu() {
	const { pathname } = useLocation();

	return (
		<nav className='navigation'>
			<ul>
				<li>
					{pathname !== 'archives'
					? <Link to='/archives' title='Archive'>Archive</Link>
					: <Link to='/' title='Home'>Home</Link>}
				</li>
			</ul>
		</nav>
	)
}