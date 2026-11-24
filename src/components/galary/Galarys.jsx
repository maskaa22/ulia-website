import './style.css';
import { useCallback, useEffect, useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PHOTOS = ['3.JPG', '2.JPG', '1.jpg', '4.JPG', '5.JPG', '6.JPG'];
const BASE = process.env.PUBLIC_URL + '/galary_img/';

function Galarys() {
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const step = useCallback((d) => setActive(i => (i === null ? i : (i + d + PHOTOS.length) % PHOTOS.length)), []);

  useEffect(() => {
    if (active === null) return undefined;
    document.body.classList.add('body-overflow-hiden');
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('body-overflow-hiden');
      window.removeEventListener('keydown', onKey);
    };
  }, [active, step]);

  return (
    <section className='container'>
      <div className='page-head'>
        <h1>Галерея</h1>
        <p>Фото з життя і зустрічей. Натисніть на фото, щоб переглянути його на весь екран.</p>
      </div>

      <div className='gallery'>
        {PHOTOS.map((file, i) => (
          <button key={file} className='gallery__item' onClick={() => setActive(i)} aria-label={`Відкрити фото ${i + 1}`}>
            <img src={BASE + file} alt={`Фото з архіву Юлії Ющенко, ${i + 1}`} loading='lazy' />
          </button>
        ))}
      </div>

      {active !== null && (
        <div className='lightbox' role='dialog' aria-modal='true' aria-label='Перегляд фото' onClick={close}>
          <button className='lightbox__btn lightbox__close' onClick={close} aria-label='Закрити'><FiX /></button>
          <button className='lightbox__btn lightbox__prev' onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label='Попереднє фото'><FiChevronLeft /></button>
          <img src={BASE + PHOTOS[active]} alt={`Фото з архіву Юлії Ющенко, ${active + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className='lightbox__btn lightbox__next' onClick={(e) => { e.stopPropagation(); step(1); }} aria-label='Наступне фото'><FiChevronRight /></button>
          <span className='lightbox__count'>{active + 1} / {PHOTOS.length}</span>
        </div>
      )}
    </section>
  )
}

export default Galarys;
