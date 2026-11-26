import './style.css';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { BiLogoTelegram } from 'react-icons/bi';
import { sendEmail } from '../../actions/user';
import React, { useState } from 'react';
import { SwalFunction } from '../../utils/SwalFunction';

const CONTACTS = [
  { icon: <FiPhone />, label: 'Телефон', value: '098 471 58 91', href: 'tel:+380984715891' },
  { icon: <BiLogoTelegram />, label: 'Telegram', value: '@uliaushenko', href: 'https://t.me/uliaushenko' },
  { icon: <FiMail />, label: 'Пошта', value: 'uliaushenko@gmail.com', href: 'mailto:uliaushenko@gmail.com' },
  { icon: <FiMapPin />, label: 'Місто', value: 'м. Кременчук' },
];

function Contact() {

  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email.trim()) || !text.trim()) {
      SwalFunction('Заповніть email і повідомлення', '', 'warning', 'Ok', true);
      return;
    }
    setSending(true);
    const result = await sendEmail(email.trim(), text.trim());
    setSending(false);
    if (result === undefined) {
      SwalFunction('Не вдалося надіслати', 'Спробуйте ще раз трохи пізніше', 'error', 'Ok', true);
      return;
    }
    setEmail('');
    setText('');
    SwalFunction('Дякую! Повідомлення надіслано', '', 'success', 'Ok', false, 2500);
  };

  return (
    <section className='section section--soft' id='contact'>
      <div className='container'>
        <div className='section-head'>
          <h2>Написати авторці</h2>
        </div>
        <div className='contact'>
          <ul className='contact__list'>
            {CONTACTS.map(item => {
              const inner = (
                <>
                  <span className='contact__icon' aria-hidden='true'>{item.icon}</span>
                  <span>
                    <span className='contact__label'>{item.label}</span>
                    <span className='contact__value'>{item.value}</span>
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href
                    ? <a className='contact__item' href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel='noreferrer'>{inner}</a>
                    : <div className='contact__item'>{inner}</div>}
                </li>
              );
            })}
          </ul>

          <form className='contact__form card' onSubmit={handleSend} noValidate>
            <label className='field'>
              <span>Ваш email</span>
              <input type='email' placeholder='name@example.com' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className='field'>
              <span>Повідомлення</span>
              <textarea rows='5' placeholder='Що ви хочете сказати?' value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button type='submit' className='btn' disabled={sending}>
              <FiSend aria-hidden='true' /> {sending ? 'Надсилаю…' : 'Відправити'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
