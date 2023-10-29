
import './style.css';
import { HiPhone } from 'react-icons/hi';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';


function Contact() {

  return (
    <div className='container'>
    <section className='contact'>
      <h2 className='main__h2'>Контакти</h2>
      <hr className='main__hr'/>
      <div className='contact__flex'>
        <div className='contact__flex-left'>
          <div className='contact__item'><HiPhone className='contact__email-icon'/><label className='contact__label contact__label-number'>0984715891</label></div>
          <div className='contact__item'><BiLogoTelegram className='contact__email-icon'/><label className='contact__label'>@uliaushenko</label></div>
        </div>
        <div className='contact__flex-rigth'>
          <div className='contact__item'><FaLocationDot className='contact__email-icon'/><label className='contact__label'>м. Кременчук</label></div>
          <div className='contact__item'><MdEmail className='contact__email-icon'/><label className='contact__label'>uliaushenko@gmail.com</label></div>
        </div>
      </div>
      <div className='contact__email'>
      <h3 className='main__h3'>Написати нам</h3>
        <div className='contact__email-item-div'><input className='contact__email-item' placeholder='Введіть еmail'/></div>
        <div className='contact__email-item-div'><textarea placeholder='Введіть повідомлення' className='contact__email-item contact-item-last'></textarea></div>
        <div className='contact__email-item-div-center'><button className='contact__email-button'>Відправити</button></div>
      </div>
      
    </section>
  </div>
  )
}

export default Contact;