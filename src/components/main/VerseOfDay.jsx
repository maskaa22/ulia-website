import './style.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { getPoem } from '../../actions/user';

const MAX_LINES = 10;

// The same poem is shown all day, and it changes every day.
function pickPoemOfDay(poems) {
  const dayNumber = Math.floor(Date.now() / 86400000);
  return poems[dayNumber % poems.length];
}

function VerseOfDay() {
  const [poem, setPoem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getPoem().then(poems => {
      if (!active) return;
      if (Array.isArray(poems) && poems.length) setPoem(pickPoemOfDay(poems));
      setLoading(false);
    });
    return () => { active = false; };
  }, []);

  if (!loading && !poem) return null; // server unavailable: skip the block quietly

  const lines = poem ? poem.text.split('\n') : [];
  const preview = lines.slice(0, MAX_LINES).join('\n');
  const cut = lines.length > MAX_LINES;

  return (
    <section className='section section--soft'>
      <div className='container'>
        <div className='verse card'>
          <span className='verse__mark' aria-hidden='true'>“</span>
          <span className='eyebrow'>Вірш дня</span>
          {loading ? (
            <>
              <div className='skeleton' style={{ height: 34, width: '55%', marginBottom: 20 }} />
              <div className='skeleton' style={{ height: 150 }} />
            </>
          ) : (
            <>
              <h2 className='verse__title'>{poem.name}</h2>
              <div className='verse__text'>{preview}{cut ? '…' : ''}</div>
              <Link to='/poems' className='link-arrow'>
                {cut ? 'Читати повністю та інші вірші' : 'Усі вірші'} <FiArrowRight aria-hidden='true' />
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default VerseOfDay;
