import Book from './Book';
import './style.css';
import { books_items } from '../../bd/books_items';


function Books() {

  return (
    <section className='container'>
      <div className='page-head'>
        <h1>Книги</h1>
        <p>Збірки віршів і прози. Деякі з них можна гортати онлайн, не виходячи з сайту.</p>
      </div>
      <div className='books'>
        {
          books_items.map(book => <Book key={book.id} book={book} />)
        }
      </div>
    </section>
  )
}

export default Books;
