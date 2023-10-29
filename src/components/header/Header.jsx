import './style.css'
import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
  const [isOpen, setOpen] = useState();

  return (
    
    <header >
      <div className='container'>
        <div className='header'>
    <span className='header__logo'>Logo</span>
    <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
      <ul className='header__nav-list'>
        <li className='header__nav-item'><NavLink to={'/'}>Головна</NavLink></li>
        <li className='header__nav-item'><NavLink to={'/about_my'}>Про мене</NavLink></li>
        <li className='header__nav-item'><NavLink to={'/poems'}>Вірші</NavLink></li>
        <li className='header__nav-item'><NavLink to={"/books"} >Книги</NavLink></li>
        <li className='header__nav-item'><NavLink to={'/galarys'}>Галерея</NavLink></li>
        <li className='header__nav-item'><NavLink to={'/login'}>Вхід</NavLink></li>
      </ul>
    </nav>
    <button className='header__menu-button' onClick={() => setOpen(!isOpen)}><GiHamburgerMenu/></button></div></div>
</header>
  )
}

export default Header;