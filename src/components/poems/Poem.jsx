import { useState } from 'react';
import { FiShare2, FiMessageSquare } from 'react-icons/fi';
import { SwalFunction } from '../../utils/SwalFunction';
import BasicRating from './BasicRating';
import './style.css';
import { useSelector } from 'react-redux';

const CLAMP_LINES = 14;

function Poem({ poem, handleOpen, setPoem_id }) {

  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);
  const [expanded, setExpanded] = useState(false);

  const isLong = (poem.text || '').split('\n').length > CLAMP_LINES;

  const share = async () => {
    const shareData = { title: poem.name, text: `${poem.name}\n\n${poem.text}`, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${poem.name}\n\n${poem.text}\n\n${window.location.href}`);
        SwalFunction('Вірш скопійовано', 'Тепер його можна вставити в повідомлення', 'success', 'Ok', false, 1800);
      }
    } catch (e) {
      /* user cancelled the share dialog */
    }
  };

  const addComment = () => {
    setPoem_id(poem._id);
    if (isAuth) {
      handleOpen();
    } else {
      SwalFunction('Щоб залишити відгук, увійдіть', 'Це займе хвилину', 'info', 'Ok', true);
    }
  };

  return (
    <article className='poem card'>
      <h2 className='poem__title'>{poem.name}</h2>
      <div className={`poem__text ${isLong && !expanded ? 'is-clamped' : ''}`}>{poem.text}</div>
      {isLong && (
        <button className='link-btn poem__more' onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
          {expanded ? 'Згорнути' : 'Читати повністю'}
        </button>
      )}
      <div className='poem__foot'>
        <BasicRating id={poem._id} rating={poem.rating} />
        <div className='poem__actions'>
          <button className='btn btn--sm btn--ghost' onClick={share}><FiShare2 aria-hidden='true' /> Поділитися</button>
          {(currentUser.role === 'user' || !isAuth) && (
            <button className='btn btn--sm btn--ghost' onClick={addComment}><FiMessageSquare aria-hidden='true' /> Відгук</button>
          )}
        </div>
      </div>
    </article>
  )
}

export default Poem;
