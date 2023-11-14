import { Box, Modal } from "@mui/material";
import './style.css';
import { addComment } from '../../actions/user';
import React, { useState} from 'react';

function AddCommentModal({open,handleClose, user_id, poem_id}) {
  
  const [text, setText] = useState('');

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="modal">
            
              <h3 className="modal-h3">Написати відгук</h3>
              <div className="modal-flex"><textarea placeholder="Писати тут..." className="modal-textarea" 
              value={text} onChange={(e) => setText(e.target.value)}/></div>
              <div className="modal-flex"><button className="modal-button" onClick={() => {
                addComment(user_id, text, poem_id)
              }}>Надіслати</button></div>
            
          </div>
        </Box>
      </Modal>
    </>
  )
}
export default AddCommentModal;