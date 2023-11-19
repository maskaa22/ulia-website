import Slide1 from '../../imgs/Slide1.JPG';
import Slide2 from '../../imgs/Slide2.JPG';
import Slide3 from '../../imgs/Slide3.JPG';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Karysel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', position: 'absolute', right: '10vh', zIndex: 1}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', position: 'absolute', left: '10vh', zIndex: 1 }}
        onClick={onClick}
      />
    );
  }


  return (
    <section className='gallery'>
     
        <Slider {...settings}>
          <div>
            <img src={Slide1} alt='slide-img' className='slide-img' />
          </div>
          <div>
            <img src={Slide2} alt='slide-img' className='slide-img' />
          </div>
          <div>
            <img src={Slide3} alt='slide-img' className='slide-img' />
          </div>
        </Slider>
    </section>
  )
}

export default Karysel;