import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='container page-head' style={{ textAlign: 'center', minHeight: '50vh' }}>
      <h1>Сторінку не знайдено</h1>
      <p style={{ marginInline: 'auto', marginBottom: '1.5rem' }}>
        Можливо, посилання застаріло. Почніть з головної або перейдіть одразу до віршів.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to='/' className='btn'>На головну</Link>
        <Link to='/poems' className='btn btn--ghost'>Читати вірші</Link>
      </div>
    </div>
  );
}

export default NotFound;
