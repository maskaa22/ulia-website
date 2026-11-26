import './style.css';

const IMG = process.env.PUBLIC_URL + '/img/';

const EVENTS = [
  { img: '630_360_1464091424-2360.png', date: '2006, Київ', text: 'Була присутня на IV Всесвітньому форумі українців' },
  { img: '2.jpg', date: '2009, Лондон, Англія', text: 'Відвідала ......жінок.....' },
  { img: 'IMG_3816.JPG', date: '20011, Чорнобиль', text: 'Вкотре побувала на своїй рідній Луб\'янці' },
  { img: '2.jpg', date: '2016, Кременчук', text: 'Презентувала свою нову книгу....' },
];

function Events() {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <h2>Події</h2>
        </div>
        <ol className='events'>
          {EVENTS.map((event, i) => (
            <li key={i} className='event card'>
              <img className='event__img' src={IMG + event.img} alt='' loading='lazy' />
              <div className='event__body'>
                <span className='event__date'>{event.date}</span>
                <p className='event__text'>{event.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Events;
