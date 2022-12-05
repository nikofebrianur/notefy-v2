import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import useLang from '../hooks/useLang';
import { register } from '../utils/network-data';

export default function RegisterPage() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const navigate = useNavigate();

  const textApp = useLang('app');
  const textRegister = useLang('register');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password yang dimasukkan tidak sama');
    }

    register({ name, email, password })
      .then((res) => {
        if (!res.error) {
          alert(textRegister.msg.registerSuccess);
          navigate('/login');
        }
      })
      .catch(() => {
        alert(textApp.msg.error);
      });
  };

  return (
    <div className='register-page'>
      <h2>{ textRegister.header }</h2>
      <form className='input-register' onSubmit={onSubmitHandler}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={onNameChange}
          minLength='6'
          maxLength='255'
          required
        />
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
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          minLength='6'
          maxLength='55'
          required
        />
		<button type='submit'>Register</button>
      </form>
      <p className='register-page__footer'>
        {textRegister.footer}{' '}
        <Link to='/login'>{textRegister.footerLoginLink}</Link>
      </p>
    </div>
  );
}
