import './style.css'
import React from 'react';
import BigFoto from '../../imgs/BigFoto.JPG';
import Kobzar from '../../imgs/Kobzar.jpg';
import TimeOpen from '../../imgs/TimeOpen.jpg';
import Vihola from '../../imgs/Vihola.jpg';
import Karysel from './Karysel';
import { HiPhone } from 'react-icons/hi';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';


export class Main extends React.Component {

  

  render() {
    return (
      <main className={'main'}>
        <div className='container'>
          <section className='main__my'>
            <article className='main__my-article-left'>
              <h1 className='main__my-h1'>Юлія Ющенко</h1>
              <p className='main__my-p'>Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
                без заметных изменений пять веков, но и перешагнул в электронный дизайн. </p>
              <button className='main__my-button'>Докладніше</button>
            </article>
            <article className='main__my-article-rigth'>
              <img alt='Юлія Ющенко' className='main__my-img' src={BigFoto} />
              <div className='main__my-div_rectangle-top'></div><div className='main__my-div_rectangle-left'></div>
            </article>
          </section></div>
        <div className='container'>
          <section className='books'>
            <h2 className='main__h2'>Книги</h2>
            <hr className='main__hr'/>
            <div className='books__flex'>
              <div className='books__cart'>
                <img alt='Кобзар моєї епохи' className='books__cart-img' src={Kobzar} />
                <p className='books__cart-p'>Кобзар моєї епохи</p>
                <div className='books__cart-flex'><button className='books__cart-button'>Подивитися</button></div>
                </div>
              <div className='books__cart'>
                <img alt='Час відкриває істину' className='books__cart-img' src={TimeOpen} />
                <p className='books__cart-p'>Час відкриває істину</p>
                <div className='books__cart-flex'><button className='books__cart-button'>Подивитися</button></div>
                </div>
              <div className='books__cart'>
                <img alt='Чорнобильська віхола' className='books__cart-img' src={Vihola} />
                <p className='books__cart-p'>Чорнобильська віхола</p>
                <div className='books__cart-flex'><button className='books__cart-button'>Подивитися</button></div>
                </div>
            </div>
          </section>
        </div>

        <section className='gallery'>
          <div className='container'>
          <Karysel/></div>
        </section>
        <div className='container'>
          <section className='contact'>
            <h2 className='main__h2'>Контакти</h2>
            <hr className='main__hr'/>
            <div className='contact__flex'>
              <div className='contact__flex-left'>
                <div className='contact__item'><HiPhone className='contact__email-icon'/><label className='contact__label'>0984715891</label></div>
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

      </main>
    )
  }

}
export default Main;