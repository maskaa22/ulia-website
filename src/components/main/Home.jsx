
import './style.css';
import BigFoto from '../../imgs/BigFoto-removebg.png';
import { NavLink } from "react-router-dom";


function Home() {

  return (
    <div className='main-color'>
          <section className='main__my'>
          <article className='main__my-article-rigth'>
              <img alt='Юлія Ющенко' className='main__my-img' src={BigFoto} />
              {/* <div className='main__my-div_rectangle-top'></div><div className='main__my-div_rectangle-left'></div> */}
            </article>
            <article className='main__my-article-left'>
              <h1 className='main__my-h1'>Юлія Ющенко</h1>
              <p className='main__my-p'>Авторка більше, як 14 книг з великим досвідом написання віршів/прози.</p>
              <div className='main-button-flex'>
              <div className='main__my-button'><NavLink to='/about_me'>ДОКЛАДНІШЕ</NavLink></div>
              <div className='main__my-button main__my-button2'><a >НАПИСАТИ НАМ</a></div>
              </div>
            </article>
            
          </section></div>
  )
}

export default Home;