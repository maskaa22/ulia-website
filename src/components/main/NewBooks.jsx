import { Link } from "react-router-dom";
import './style.css';
import { FiArrowRight } from 'react-icons/fi';
import Kobzar from '../../imgs/Kobzar.jpg';
import TimeOpen from '../../imgs/TimeOpen.jpg';
import Vihola from '../../imgs/Vihola.jpg';

const NEW_BOOKS = [
  { title: 'Кобзар моєї епохи', cover: Kobzar, to: '/books' },
  { title: 'Час відкриває істину', cover: TimeOpen, to: '/book/:1', readable: true },
  { title: 'Чорнобильська віхола', cover: Vihola, to: '/books' },
];

function NewBooks() {
  return (
    <section className='section' id='books'>
      <div className='container'>
        <div className='section-head'>
          <h2>Нові книги</h2>
          <Link to='/books' className='link-arrow'>Усі книги <FiArrowRight aria-hidden='true' /></Link>
        </div>
        <div className='book-grid'>
          {NEW_BOOKS.map(book => (
            <Link key={book.title} to={book.to} className='book-tile'>
              <img src={book.cover} alt={`Обкладинка книги «${book.title}»`} loading='lazy' />
              <span className='book-tile__title'>{book.title}</span>
              <span className='book-tile__cta'>{book.readable ? 'Читати онлайн' : 'Детальніше'} <FiArrowRight aria-hidden='true' /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewBooks;
