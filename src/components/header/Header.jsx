import './style.css'
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { logout, refresh } from '../../actions/user';
import { useSelector } from 'react-redux';
import { ImExit } from "react-icons/im";


function Header() {
  const [isOpen, setOpen] = useState();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      refresh();
    }
  }, []);

  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);


  return (

    <header >
      <div className='container'>
        <div className='header'>
          <span className='header__logo'>Logo</span>
          {/* <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
            <ul className='header__nav-list'>
              <li className='header__nav-item'><NavLink to={'/'} activeClassName={'active'} exact>Головна</NavLink></li>
              <li className='header__nav-item'><NavLink to={'/about_my'} activeClassName={'active'}>Про мене</NavLink></li>
              <li className='header__nav-item'><NavLink to={'/poems'} activeClassName={'active'}>Вірші</NavLink></li>
              <li className='header__nav-item'><NavLink to={"/books"} activeClassName={'active'}>Книги</NavLink></li>
              <li className='header__nav-item'><NavLink to={'/galarys'} activeClassName={'active'}>Галерея</NavLink></li>
              <li className='header__nav-item'><NavLink to={'/comments'} activeClassName={'active'}>Відгуки</NavLink></li>
              {!isAuth && <li className='header__nav-item'><NavLink to={'/login'} activeClassName={'active'}>Вхід</NavLink></li>}
              {!isAuth && <li className='header__nav-item'><NavLink to={'/registration'} activeClassName={'active'}>Реєстрація</NavLink></li>
              }
              
              {isAuth && <li className='header__nav-item' onClick={() => logout()}><NavLink ><ImExit className='icon-exit'/>Вихід</NavLink></li>}
            </ul>
          </nav> */}
          <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
            <NavLink to={'/'} activeClassName={'active'} exact>Головна</NavLink>
             {/* <NavLink to={'/about_my'} activeClassName={'active'}>Про мене</NavLink> */}
              <NavLink to={'/poems'} activeClassName={'active'}>Вірші</NavLink>
              <NavLink to={"/books"} activeClassName={'active'}>Книги</NavLink>
              <NavLink to={'/galarys'} activeClassName={'active'}>Галерея</NavLink>
              <NavLink to={'/comments'} activeClassName={'active'}>Відгуки</NavLink>
              {!isAuth && <NavLink to={'/login'} activeClassName={'active'}>Вхід</NavLink>}
              {!isAuth && <NavLink to={'/registration'} activeClassName={'active'}>Реєстрація</NavLink>
              }
              
              {isAuth && <a onClick={() => logout()} className='nav-link-out'><ImExit className='icon-exit'/>Вихід</a>}
              {/* <button className='header__menu-button' onClick={() => setOpen(!isOpen)}><GiHamburgerMenu /></button> */}
          </nav>
          <button className='header__menu-button' onClick={() => setOpen(!isOpen)}><GiHamburgerMenu /></button>
          </div></div>
    </header>
  )
}

export default Header;