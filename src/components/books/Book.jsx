
import './style.css';
import {useNavigate} from "react-router-dom";



function Book({ book }) {
  const navigate = useNavigate();

  

  return (
      <div className='book__cart_item'>
        <img alt={book.title} className='book__cart-img' src={'./img/' + book.foto}/>
        <p className='book__cart-p-title'>{book.title}</p>
        <p className='book__cart-p-text'>{book.text}</p>
        <div className='book__cart-flex-price'>
          <div className='book__cart-flex'><p className='book__cart-p-left'>Вартість - </p><p className='book__cart-p'>{book.price} грн.</p></div>
          <button className='book__cart-button-buy'>Замовити</button>
          </div>
        <div className='book__cart-flex'><button className='book__cart-button' onClick={()=> {
          navigate(`/book/:${book.id}`);
         
        }}>Переглянути</button></div>
      </div>
  )
}

export default Book;