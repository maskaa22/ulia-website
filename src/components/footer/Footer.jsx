import './style.css'
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container footer__grid'>
        <div className='footer__about'>
          <span className='footer__brand'>Юлія Ющенко</span>
          <p>Поетеса з Кременчука. Вірші, книги та події.</p>
        </div>

        <nav className='footer__nav' aria-label='Навігація внизу сторінки'>
          <NavLink to='/poems'>Вірші</NavLink>
          <NavLink to='/books'>Книги</NavLink>
          <NavLink to='/galarys'>Галерея</NavLink>
          <NavLink to='/comments'>Відгуки</NavLink>
          <Link to='/#contact'>Контакти</Link>
        </nav>

        <p className='footer__copy'>© {new Date().getFullYear()} Юлія Ющенко. Всі права захищені.</p>
      </div>
    </footer>
  )
}

export default Footer;
