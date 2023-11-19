import {useNavigate} from "react-router-dom";
import './style.css';
import Kobzar from '../../imgs/Kobzar.jpg';
import TimeOpen from '../../imgs/TimeOpen.jpg';
import Vihola from '../../imgs/Vihola.jpg';


function Events() {

  const navigate = useNavigate();

  return (
    <div className='container'>
          <section className='events'>
            <h2 className='main__h2' >Події</h2>
            {/* <hr className='main__hr'/> */}
            <article className="events-container">
              <div className="event-item">
                <img className="event-img" src={'./img/' + '630_360_1464091424-2360.png'}/>
                <p className="event-data">2006, Київ</p>
                <p className="event-text">Була присутня на IV Всесвітньому форумі українців</p>
              </div>
              <div className="event-item">
                <img className="event-img" src={'./img/' + '2.jpg'}/>
                <p className="event-data">2009, Лондон, Англія</p>
                <p className="event-text">Відвідала ......жінок.....</p>
              </div>
              <div className="event-item">
                <img className="event-img" src={'./img/' + 'IMG_3816.JPG'}/>
                <p className="event-data">20011, Чорнобиль</p>
                <p className="event-text">Вкотре побувала на своїй рідній Луб'янці</p>
              </div>
              <div className="event-item">
                <img className="event-img" src={'./img/' + '2.jpg'}/>
                <p className="event-data">2016, Кременчук</p>
                <p className="event-text">Презентувала свою нову книгу....</p>
              </div>
            </article>
          </section>
        </div>
  )
}

export default Events;