import './style.css'
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon, FiLogOut } from 'react-icons/fi';
import { logout, refresh } from '../../actions/user';
import { useSelector } from 'react-redux';

const LINKS = [
  { to: '/', label: 'Головна', end: true },
  { to: '/about_me', label: 'Про авторку' },
  { to: '/poems', label: 'Вірші' },
  { to: '/books', label: 'Книги' },
  { to: '/galarys', label: 'Галерея' },
  { to: '/comments', label: 'Відгуки' },
];

const linkClass = ({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link');

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');
  const isAuth = useSelector(state => state.user.isAuth);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      refresh();
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('body-overflow-hiden', isOpen);
    if (!isOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className='container site-header__inner'>
        <NavLink to='/' className='brand' onClick={closeMenu} aria-label='Юлія Ющенко — на головну'>
          <span className='brand__mark'>Ю</span>
          <span className='brand__name'>Юлія Ющенко</span>
        </NavLink>

        <nav id='main-nav' className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label='Головне меню'>
          {LINKS.map(link => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
          <div className='site-nav__auth'>
            {!isAuth && <NavLink to='/login' className='btn btn--sm' onClick={closeMenu}>Увійти</NavLink>}
            {!isAuth && <NavLink to='/registration' className='btn btn--sm btn--ghost' onClick={closeMenu}>Реєстрація</NavLink>}
            {isAuth && (
              <button className='btn btn--sm btn--ghost' onClick={() => { logout(); closeMenu(); }}>
                <FiLogOut aria-hidden='true' /> Вийти
              </button>
            )}
          </div>
        </nav>

        <div className='site-header__actions'>
          <button
            className='icon-btn'
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'}
            title={theme === 'dark' ? 'Світла тема' : 'Темна тема'}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className='icon-btn burger'
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={isOpen}
            aria-controls='main-nav'
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isOpen && <div className='nav-backdrop' onClick={closeMenu} aria-hidden='true' />}
    </header>
  )
}

export default Header;
