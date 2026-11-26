import './style.css';
import { IoClose } from 'react-icons/io5';
import { FiSearch, FiPlus } from 'react-icons/fi';
import React, { useEffect, useState, useCallback } from 'react';
import { createPoem, getPoem } from '../../actions/user';
import Poem from './Poem';

function CreatePoem({ currentUser, handleOpen, setPoem_id }) {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const loadPoems = useCallback(() => {
    return getPoem().then(data => {
      setPoems(data || []);
      setLoading(false);
    });
  }, []);

  useEffect(() => { loadPoems(); }, [loadPoems]);

  const publish = async () => {
    if (!title.trim() || !text.trim()) return;
    await createPoem(currentUser.id, title, text);
    setTitle('');
    setText('');
    setFormOpen(false);
    loadPoems();
  };

  const q = query.trim().toLowerCase();
  const visible = q
    ? poems.filter(p => (p.name || '').toLowerCase().includes(q) || (p.text || '').toLowerCase().includes(q))
    : poems;

  return (
    <div className='container poems'>
      <div className='poems__toolbar'>
        {poems.length > 0 && (
          <label className='search'>
            <FiSearch aria-hidden='true' />
            <input
              type='search'
              placeholder='Пошук за назвою або рядком…'
              aria-label='Пошук віршів'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        )}
        {currentUser.role === 'admin' && (
          <button className='btn' onClick={() => setFormOpen(true)}><FiPlus aria-hidden='true' /> Додати вірш</button>
        )}
      </div>

      {formOpen && (
        <div className='create-poem card'>
          <button className='create-poem__close icon-btn' onClick={() => setFormOpen(false)} aria-label='Закрити'><IoClose /></button>
          <label className='field'>
            <span>Назва</span>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className='field'>
            <span>Текст</span>
            <textarea rows='12' value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <button className='btn' onClick={publish}>Опублікувати</button>
        </div>
      )}

      {loading && (
        <div className='poems__list'>
          {[0, 1, 2].map(i => <div key={i} className='skeleton' style={{ height: 280 }} />)}
        </div>
      )}

      {!loading && poems.length === 0 && (
        <p className='empty'>Вірші поки не завантажились. Сервер може прокидатися — спробуйте оновити сторінку за хвилину.</p>
      )}

      {!loading && poems.length > 0 && visible.length === 0 && (
        <p className='empty'>За запитом «{query}» нічого не знайдено.</p>
      )}

      {!loading && visible.length > 0 && (
        <>
          <p className='poems__count'>{q ? `Знайдено: ${visible.length}` : `Віршів: ${poems.length}`}</p>
          <div className='poems__list'>
            {visible.map(poem => <Poem key={poem._id} poem={poem} handleOpen={handleOpen} setPoem_id={setPoem_id} />)}
          </div>
        </>
      )}
    </div>
  )
}

export default CreatePoem;
