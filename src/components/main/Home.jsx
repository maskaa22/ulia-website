import './style.css';
import BigFoto from '../../imgs/BigFoto-removebg.webp';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function Home() {
  return (
    <section className='hero'>
      <div className='container hero__grid'>
        <div className='hero__text'>
          <span className='eyebrow'>Поетеса · Кременчук</span>
          <h1 className='hero__title'>Юлія <span>Ющенко</span></h1>
          <p className='hero__lead'>
            Авторка понад 14 книг віршів і прози. Слово про час, пам’ять і рідну землю.
          </p>
          <div className='hero__cta'>
            <Link to='/poems' className='btn'>Читати вірші <FiArrowRight aria-hidden='true' /></Link>
            <Link to='/books' className='btn btn--ghost'>Книги</Link>
          </div>
          <p className='hero__more'>
            <Link to='/about_me' className='link-arrow'>Про авторку <FiArrowRight aria-hidden='true' /></Link>
          </p>
        </div>

        <div className='hero__art'>
          <div className='hero__frame'>
            <img src={BigFoto} alt='Юлія Ющенко' width='440' height='550' />
          </div>
          <div className='hero__chip hero__chip--books'><strong>14+</strong> книг</div>
          <div className='hero__chip hero__chip--city'>Кременчук</div>
        </div>
      </div>
    </section>
  )
}

export default Home;
