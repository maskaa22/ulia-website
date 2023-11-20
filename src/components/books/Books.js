
import Book from './Book';
import './style.css';
import { books_items } from '../../bd/books_items';


function Books() {

  return (
    
      <section className='books__item'>
        {/* <h2 className='main__h2' id={'books'} >Книги</h2> */}
        <div className='container'>
        <div className='books__main'>
          {
            books_items.map(book => <Book key={book.id} book={book} />)
          }</div></div>
      </section>
   
  )
}

export default Books;