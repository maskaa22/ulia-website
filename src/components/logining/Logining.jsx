import './style.css';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registration, login } from '../../actions/user';
import { SwalFunction } from '../../utils/SwalFunction';


function Logining() {

  const isLogin = useLocation().pathname === '/login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    const res = isLogin ? await login(email, password) : await registration(name, email, password);
    setBusy(false);
    if (!res) {
      SwalFunction(
        isLogin ? 'Не вдалося увійти' : 'Не вдалося зареєструватися',
        isLogin ? 'Перевірте email і пароль' : 'Перевірте дані та спробуйте ще раз',
        'error', 'Ok', true
      );
      return;
    }
    if (!isLogin) {
      SwalFunction('Реєстрація успішна', 'Тепер увійдіть у свій акаунт', 'success', 'Ok', false, 2200);
    }
    navigate(isLogin ? '/' : '/login');
  };

  return (
    <div className='container auth'>
      <form className='auth__card card' onSubmit={submit}>
        <h1>{isLogin ? 'Вхід' : 'Реєстрація'}</h1>
        <p className='auth__sub'>
          {isLogin ? 'Увійдіть, щоб залишати відгуки під віршами.' : 'Створіть акаунт, щоб залишати відгуки під віршами.'}
        </p>

        {!isLogin && (
          <label className='auth__field'>
            <span>Ім’я</span>
            <div className='auth__input'><FiUser aria-hidden='true' />
              <input value={name} onChange={(e) => setName(e.target.value)} type='text' autoComplete='name' required />
            </div>
          </label>
        )}
        <label className='auth__field'>
          <span>Email</span>
          <div className='auth__input'><FiMail aria-hidden='true' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' autoComplete='email' required />
          </div>
        </label>
        <label className='auth__field'>
          <span>Пароль</span>
          <div className='auth__input'><FiLock aria-hidden='true' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' autoComplete={isLogin ? 'current-password' : 'new-password'} required />
          </div>
        </label>

        <button type='submit' className='btn btn--block' disabled={busy}>
          {busy ? 'Зачекайте…' : isLogin ? 'Увійти' : 'Зареєструватися'}
        </button>

        <p className='auth__switch'>
          {isLogin
            ? <>Ще немає акаунта? <Link to='/registration'>Зареєструватися</Link></>
            : <>Вже є акаунт? <Link to='/login'>Увійти</Link></>}
        </p>
      </form>
    </div>
  )
}

export default Logining;
