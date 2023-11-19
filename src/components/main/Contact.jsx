
import './style.css';
import { HiPhone } from 'react-icons/hi';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { sendEmail } from '../../actions/user';
import React, { useState } from 'react';


function Contact() {

  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  return (
    <section className='contact'>
      <h2 className='main__h2'>Контакти</h2>
      {/* <hr className='main__hr'/> */}
      <div className='container'>
        <div className='contact__flex'>
          <div className='contact-info'>
            <div className='contact__item'><HiPhone className='contact__email-icon' /><label className='contact__label contact__label-number'>0984715891</label></div>
            <div className='contact__item'><BiLogoTelegram className='contact__email-icon' /><label className='contact__label'>@uliaushenko</label></div>
            <div className='contact__item'><FaLocationDot className='contact__email-icon' /><label className='contact__label'>м. Кременчук</label></div>
            <div className='contact__item'><MdEmail className='contact__email-icon' /><label className='contact__label'>uliaushenko@gmail.com</label></div>
          </div>

          <div className='contact__email'>
            <h3 className='main__h3'>Написати нам</h3>
            <div className='contact__email-item-div'>
              <input className='contact__email-item' placeholder='Введіть еmail' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            <div className='contact__email-item-div'>
              <textarea placeholder='Введіть повідомлення' className='contact__email-item contact-item-last' value={text} onChange={(e) => setText(e.target.value)}></textarea>
              <button className='contact__email-button' onClick={() => sendEmail(email, text)}>ВІДПРАВИТИ</button>
              </div>
            {/* <div className='contact__email-item-div-center'><button className='contact__email-button' onClick={() => sendEmail(email, text)}>ВІДПРАВИТИ</button></div> */}
          </div></div></div>

    </section>
  )
}

export default Contact;