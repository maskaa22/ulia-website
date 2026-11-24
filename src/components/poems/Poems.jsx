import './style.css';
import CreatePoem from "./CreatePoem";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import AddCommentModal from "../modal/AddCommentModal";

function Poems() {

  const currentUser = useSelector(state => state.user.currentUser);
  const [open, setOpen] = useState(false);
  const [poem_id, setPoem_id] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='container page-head'>
        <h1>Вірші</h1>
        <p>Читайте, оцінюйте та діліться. Кожен вірш можна оцінити зірочками й залишити відгук авторці.</p>
      </div>
      <AddCommentModal user_id={currentUser.id} open={open} handleClose={handleClose} poem_id={poem_id}/>
      <CreatePoem currentUser={currentUser} handleOpen={handleOpen} setPoem_id={setPoem_id}/>
    </>
  )
}

export default Poems;
