import Slide1 from '../../imgs/Slide1.JPG';
import Slide2 from '../../imgs/Slide2.JPG';
import Slide3 from '../../imgs/Slide3.JPG';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDES = [Slide1, Slide2, Slide3];

function Karysel() {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    adaptiveHeight: false
  };

  return (
    <section className='section section--soft'>
      <div className='container'>
        <div className='section-head'>
          <h2>З архіву</h2>
        </div>
        <div className='slider'>
          <Slider {...settings}>
            {SLIDES.map((src, i) => (
              <div key={i}>
                <img src={src} alt={`Фото з архіву Юлії Ющенко, ${i + 1}`} className='slide-img' loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Karysel;
