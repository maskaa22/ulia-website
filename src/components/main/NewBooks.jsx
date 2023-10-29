
import './style.css';
import Kobzar from '../../imgs/Kobzar.jpg';
import TimeOpen from '../../imgs/TimeOpen.jpg';
import Vihola from '../../imgs/Vihola.jpg';


function NewBooks() {

  return (
    <div className='container'>
          <section className='books'>
            <h2 className='main__h2' id={'books'} >Новинки</h2>
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
  )
}

export default NewBooks;