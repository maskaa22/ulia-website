import './style.css';
import { Link } from 'react-router-dom';
import Portrait from '../../imgs/BigFoto-removebg.webp';

const FACTS = [
  ['Народилася', '1 вересня 1945 року'],
  ['Місце народження', 'с. Луб’янка, Чорнобильський р-н, Київська обл.'],
  ['Освіта', 'Дніпродзержинський хіміко-технологічний технікум'],
  ['Живе', 'м. Кременчук'],
];

function AboutMy() {

  return (
    <section className='container about'>
      <aside className='about__side'>
        <div className='about__photo'>
          <img src={Portrait} alt='Юлія Ющенко' />
        </div>
        <dl className='about__facts card'>
          {FACTS.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </aside>

      <div className='about__main'>
        <span className='eyebrow'>Про авторку</span>
        <h1>Юлія Ющенко</h1>
        <div className='about__bio'>
          <p>
            Народилася 1 вересня 1945 року в селі Луб’янка Чорнобильського району Київської області.
            У дитинстві писати вірші забороняли, тому спочатку вона робила це крадькома, а потім взагалі перестала.
          </p>
          <p>
            Закінчила Іллінецьку школу, після того вступила в Дніпродзержинський хіміко-технологічний технікум.
          </p>
          <p>
            Після аварії на ЧАЕС не втримала думок і почала знову писати вірші.
          </p>
        </div>
        <div className='about__cta'>
          <Link to='/poems' className='btn'>Читати вірші</Link>
          <Link to='/books' className='btn btn--ghost'>Книги</Link>
        </div>
      </div>
    </section>
  )
}

export default AboutMy;
