import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import HTMLFlipBook from 'react-pageflip';
import { FiArrowLeft } from 'react-icons/fi';
import { timeOpen } from '../../bd/timeOpen';


function BookItemForRead() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [book, setBook] = useState([]);

  const location = window.location.pathname;
  const locationSplit = location.split('/:');
  const book_id = locationSplit[1];

  useEffect(() => {
    // page ratio of the scans is 5:7; shrink to fit narrow screens
    const width = Math.min(500, Math.floor((window.innerWidth - 32) / (window.innerWidth > 700 ? 2 : 1)));
    setSize({ width, height: Math.round(width * 1.44) });
    if (book_id === '1') {
      setBook(timeOpen);
    }
  }, [book_id]);

  return (
    <div className='container reader'>
      <div className='reader__head'>
        <Link to='/books' className='link-arrow'><FiArrowLeft aria-hidden='true' /> Усі книги</Link>
        <h1>{book_id === '1' ? 'Час відкриває істину' : 'Книга'}</h1>
        {book.length > 0 && <p>Гортайте сторінки мишею, пальцем або клікніть по краю сторінки.</p>}
      </div>

      {book.length === 0 ? (
        <p className='empty'>Цю книгу поки не можна читати онлайн. <Link to='/books' className='link-btn'>Повернутися до книг</Link></p>
      ) : (
        <div className="flex-book-center">
          {size.width > 0 && (
            <HTMLFlipBook width={size.width} height={size.height}>
              {
                book.map(page => <div key={page.id}>
                  <img src={process.env.PUBLIC_URL + '/books_img/timeOpen/' + page.foto} alt={'Сторінка книги ' + page.id} loading="lazy" className="book-page-img" />
                </div>)
              }
            </HTMLFlipBook>
          )}
        </div>
      )}
    </div>
  )
}

export default BookItemForRead;
