import { useState, useRef, useLayoutEffect } from 'react';
import { FiShare2, FiMessageSquare } from 'react-icons/fi';
import { SwalFunction } from '../../utils/SwalFunction';
import BasicRating from './BasicRating';
import './style.css';
import { useSelector } from 'react-redux';

function Poem({ poem, handleOpen, setPoem_id }) {

  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const textRef = useRef(null);

  // Collapsed cards all have the same text height; the "read more" button
  // is shown only when this poem really does not fit into it.
  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return undefined;
    const check = () => {
      if (!expanded) setOverflowing(el.scrollHeight > el.clientHeight + 1);
    };
    check();
    window.addEventListener('resize', check);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(check);
    return () => window.removeEventListener('resize', check);
  }, [expanded, poem.text]);

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

  const textClass = `poem__text ${expanded ? '' : 'is-collapsed'} ${!expanded && overflowing ? 'is-faded' : ''}`;

  return (
    <article className='poem card'>
      <h2 className='poem__title'>{poem.name}</h2>
      <div ref={textRef} className={textClass}>{poem.text}</div>
      <div className='poem__more-wrap'>
        {(overflowing || expanded) && (
          <button className='link-btn' onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {expanded ? 'Згорнути' : 'Читати повністю'}
          </button>
        )}
      </div>
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
