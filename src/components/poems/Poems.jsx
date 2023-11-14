
// import './style.css';

import CreatePoem from "./CreatePoem";
import { useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import * as React from 'react';
import AddCommentModal from "../modal/AddCommentModal";
import { getPoem } from "../../actions/user";

function Poems() {

  //const [poem, setPoem] = useState([]);

 // useEffect(() => {
    // if (localStorage.getItem('token')) {
    //   refresh();
    // }
    //getPoem().then(poem => setPoem(poem));
  //}, []);
  

  //const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);
  const [open, setOpen] = React.useState(false);
  const [poem_id, setPoem_id] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container">
      <AddCommentModal user_id={currentUser.id} open={open} handleClose={handleClose} poem_id={poem_id}/>
      <CreatePoem currentUser={currentUser} handleOpen={handleOpen} setPoem_id={setPoem_id}/>
    </div>
  )
}

export default Poems;