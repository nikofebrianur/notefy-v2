import React, { useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import AuthContext from '../../contexts/AuthContext';
import useLang from '../../hooks/useLang';

export default function LogoutButton() {
	const { auth } = useContext(AuthContext);
	const text = useLang('app');

	const onLogoutHandler = () => {
		if (window.confirm(text.msg.confirm)) {
			localStorage.removeItem('accessToken');
			window.location = '/';
		}
	}

	return (
		<>
		{
			auth ? (
				<button
					type='button'
					title='Logout'
					className='button-logout'
					onClick={onLogoutHandler}
				>
					<FaSignOutAlt />
				</button>
			) : ''
		}
		</>
	)
};