import { useEffect, useState } from "react";
import './style.css';
import HTMLFlipBook from 'react-pageflip';
import { timeOpen } from '../../bd/timeOpen';


function BookItemForRead() {
  const [flipPageWidth, setFlipPageWidth] = useState(0);
  const [flipPageHeight, setFlipPageHeigh] = useState(0);
  const [book, setBook] = useState([]);

  const location = window.location.pathname;
  const locationSplit = location.split('/:');
  const book_id = locationSplit[1];

  useEffect(() => {
    if (window.innerWidth > 450) {
      setFlipPageWidth(500);
      setFlipPageHeigh(720)
    } else {
      setFlipPageWidth(200);
      setFlipPageHeigh(300)
    }
    if (book_id === '1') {
      setBook(timeOpen);
    }
  }, []);

  return (
    <div className='container'>
      <div className="flex-book-center">
        <HTMLFlipBook width={flipPageWidth} height={flipPageHeight}>
          {
            book.map(page => <div key={page.id}>
              <img src={'../../books_img/timeOpen/' + page.foto} alt={'dfvdfv'} className="book-page-img" />
            </div>)
          }
        </HTMLFlipBook>
      </div>
    </div>
  )
}

export default BookItemForRead;