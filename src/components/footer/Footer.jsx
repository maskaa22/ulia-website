import './style.css'
import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";

export class Footer extends React.Component {

render() {
  return (
    <footer className='footer'>
       <div className='container footer-height'>
        
        <div className='footer-flex'>
        <div className='footer-center footer-pos'><div className='circle'/><span className='header__logo'>Юлія Ющенко</span></div>
          <div><FaRegCopyright /> 2023 Всі права захищені.</div>
        </div>
       </div>
    </footer>
  )
}

}
export default Footer;