import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import HTMLFlipBook from 'react-pageflip';
import { FiArrowLeft, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { timeOpen } from '../../bd/timeOpen';


function BookItemForRead() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [book, setBook] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [landscape, setLandscape] = useState(true); // two pages side by side
  const [flipped, setFlipped] = useState(false);    // has the reader turned a page yet
  const bookRef = useRef(null);

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

  const flipPrev = useCallback(() => bookRef.current?.pageFlip()?.flipPrev(), []);
  const flipNext = useCallback(() => bookRef.current?.pageFlip()?.flipNext(), []);

  // turn pages with the arrow keys
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') flipNext();
      if (e.key === 'ArrowLeft') flipPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flipNext, flipPrev]);

  const total = book.length;
  const visible = landscape ? 2 : 1;
  const label = landscape && pageIndex + 2 <= total
    ? `Сторінки ${pageIndex + 1}–${pageIndex + 2} з ${total}`
    : `Сторінка ${pageIndex + 1} з ${total}`;

  return (
    <div className='container reader'>
      <div className='reader__head'>
        <Link to='/books' className='link-arrow'><FiArrowLeft aria-hidden='true' /> Усі книги</Link>
        <h1>{book_id === '1' ? 'Час відкриває істину' : 'Книга'}</h1>
      </div>

      {total === 0 ? (
        <p className='empty'>Цю книгу поки не можна читати онлайн. <Link to='/books' className='link-btn'>Повернутися до книг</Link></p>
      ) : (
        <>
          <div className='reader__bar' role='group' aria-label='Перегортання сторінок'>
            <button className='btn btn--sm btn--ghost' onClick={flipPrev} disabled={pageIndex === 0}>
              <FiChevronLeft aria-hidden='true' /> Назад
            </button>
            <span className='reader__count' aria-live='polite'>{label}</span>
            <button
              className={`btn btn--sm ${flipped ? '' : 'is-hint'}`}
              onClick={flipNext}
              disabled={pageIndex + visible >= total}
            >
              Далі <FiChevronRight aria-hidden='true' />
            </button>
          </div>
          <p className='reader__hint'>
            {flipped
              ? 'Можна гортати кнопками, стрілками ← → на клавіатурі або перетягуючи сторінку.'
              : 'Натисніть «Далі», клавішу → або потягніть кут сторінки, щоб перегорнути.'}
          </p>

          <div className="flex-book-center">
            {size.width > 0 && (
              <HTMLFlipBook
                ref={bookRef}
                width={size.width}
                height={size.height}
                onInit={(e) => setLandscape(e.data.mode === 'landscape')}
                onChangeOrientation={(e) => setLandscape(e.data === 'landscape')}
                onFlip={(e) => { setPageIndex(e.data); setFlipped(true); }}
              >
                {
                  book.map(page => <div key={page.id}>
                    <img src={process.env.PUBLIC_URL + '/books_img/timeOpen/' + page.foto} alt={'Сторінка книги ' + page.id} loading="lazy" className="book-page-img" />
                  </div>)
                }
              </HTMLFlipBook>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default BookItemForRead;
