
import './style.css';
import { GoPeople } from 'react-icons/go';
import { TbLock } from 'react-icons/tb';
import { BiHighlight } from 'react-icons/bi';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { registration, login } from '../../actions/user';



function Logining() {

  const location = window.location.pathname;
  const locationSplit = location.split('/:');
  const locationHeader = locationSplit[0];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  return (
    <div className='container'>
    <div className="form-wr">
      <div>
        <h2 className='form-h2'>{locationHeader === '/login' ? 'Авторизація': 'Реєстрація'}</h2>
        {locationHeader === '/registration' && <div className='inputWithIcon'>
          <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder={`Введіть ім'я`} className='form-input'/>
          <BiHighlight/></div>}
        <div className='inputWithIcon'>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Введіть імейл' className='form-input'/>
          <GoPeople/></div>
        <div className='inputWithIcon'>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Введіть пароль' className='form-input'/><TbLock/></div>
        <button className='form-button' onClick={() => {
          
          if(locationHeader !== '/login') 
          {
            registration(name, email, password).then(res => {
              if (res) {
                navigate('/login');
            }
            })
          } else {
            login(email, password).then(res => {
              if (res) {
                navigate('/');
            }
            })
          }
        }}>{locationHeader === '/login' ? 'Вхід': 'Зареєструватися'}</button>
      </div>
    </div>
  </div>
  )
}

export default Logining;