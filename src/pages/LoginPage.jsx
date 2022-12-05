import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import useInput from '../hooks/useInput';
import useLang from '../hooks/useLang';
import { getUserLogged, login, putAccessToken } from '../utils/network-data';

export default function LoginPage() {
  const { setAuth } = useContext(AuthContext);
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const navigate = useNavigate();

  const textApp = useLang('app');
  const textLogin = useLang('login');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({ email, password }).then((res) => {
      if (!res.error) {
        putAccessToken(res.data.accessToken);
        getUserLogged()
          .then((res) => {
            if (!res.error) {
              setAuth(res.data);
            } else {
              setAuth(null);
            }
            navigate('/');
          })
          .catch(() => {
            alert(textApp.msg.error);
          });
      }
    });
  };

  return (
    <div className='login-page'>
      <h2>{textLogin.header}</h2>
      <form className='input-login' onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={onEmailChange}
          minLength='6'
          maxLength='255'
          required
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={onPasswordChange}
          minLength='6'
          maxLength='55'
          required
        />
        <button type='submit'>Login</button>
      </form>
      <p className='login-page__footer'>
        {textLogin.footer}{' '}
        <Link to='/register'>{textLogin.footerRegisterLink}</Link>
      </p>
    </div>
  );
}
