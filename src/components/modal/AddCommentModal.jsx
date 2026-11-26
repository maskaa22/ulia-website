import { Box, Modal } from "@mui/material";
import './style.css';
import { addComment } from '../../actions/user';
import { SwalFunction } from '../../utils/SwalFunction';
import { IoClose } from 'react-icons/io5';
import React, { useState} from 'react';

function AddCommentModal({open,handleClose, user_id, poem_id}) {

  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);

  const send = async () => {
    if (!text.trim()) return;
    setBusy(true);
    const res = await addComment(user_id, text.trim(), poem_id);
    setBusy(false);
    if (res) {
      setText('');
      handleClose();
      SwalFunction('Дякую за відгук!', '', 'success', 'Ok', false, 2000);
    } else {
      SwalFunction('Не вдалося надіслати', 'Спробуйте ще раз', 'error', 'Ok', true);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="comment-modal-title"
    >
      <Box>
        <div className="modal">
          <button className='modal__close icon-btn' onClick={handleClose} aria-label='Закрити'><IoClose /></button>
          <h2 id='comment-modal-title' className="modal__title">Ваш відгук</h2>
          <p className='modal__hint'>Поділіться враженням від вірша — авторці буде приємно прочитати.</p>
          <textarea placeholder="Напишіть тут…" className="modal__textarea" rows='5'
            value={text} onChange={(e) => setText(e.target.value)} autoFocus />
          <button className="btn btn--block" onClick={send} disabled={busy || !text.trim()}>
            {busy ? 'Надсилаю…' : 'Надіслати'}
          </button>
        </div>
      </Box>
    </Modal>
  )
}
export default AddCommentModal;
