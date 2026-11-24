import './style.css';
import { Link } from "react-router-dom";
import { FiBookOpen, FiShoppingBag } from 'react-icons/fi';

function Book({ book }) {
  return (
    <article className='book card'>
      <div className='book__cover'>
        <img alt={`Обкладинка книги «${book.title}»`} src={process.env.PUBLIC_URL + '/img/' + book.foto} loading='lazy' />
      </div>
      <div className='book__body'>
        <h2 className='book__title'>{book.title}</h2>
        <p className='book__text'>{book.text}</p>
        <p className='book__price'>{book.price} грн</p>
        <div className='book__actions'>
          {book.readable && (
            <Link to={`/book/:${book.id}`} className='btn btn--sm'><FiBookOpen aria-hidden='true' /> Читати онлайн</Link>
          )}
          <Link to='/#contact' className={`btn btn--sm ${book.readable ? 'btn--ghost' : ''}`}><FiShoppingBag aria-hidden='true' /> Замовити</Link>
        </div>
      </div>
    </article>
  )
}

export default Book;
