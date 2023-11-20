

import { SwalFunction } from '../../utils/SwalFunction';
import BasicRating from './BasicRating';
import './style.css';
import { useSelector } from 'react-redux';


function Poem({ poem, handleOpen, setPoem_id, i }) {

  const isAuth = useSelector(state => state.user.isAuth);
  const currentUser = useSelector(state => state.user.currentUser);


  return (
    <div className={i%2===0 ? 'container-poem grey' : 'container-poem'}>
      <h2 className='title-poem'>{poem.name}</h2>
      <div className='text-poem'>{poem.text}</div>
      <div className='rating'><BasicRating id={poem._id} rating={poem.rating} /></div>
      {(currentUser.role === 'user' || !isAuth) && <button className='add-comment' onClick={() => {
        setPoem_id(poem._id)
        if (isAuth) { handleOpen() } else
        //SwalFunction('Помилка!', 'Авторизуйтеся', 'error', 'Ok', false, 2500)
        SwalFunction('Авторизуйтеся!', '', 'error', 'Ok', false, 2500)
      }}>Додати відгук</button>}
    </div>
  )
}

export default Poem;