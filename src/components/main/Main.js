import './style.css'
import React from 'react';
import BigFoto from '../../imgs/BigFoto.JPG';

export class Main extends React.Component {

  render() {
    return (
      <main className={'main'}>
        <div className='container'>
        <section className='main__my'>
          <article className='main__my-article-left'>
            <h1 className='main__my-h1'>Юлія Ющенко</h1>
            <p className='main__my-p'>Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
              В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
              без заметных изменений пять веков, но и перешагнул в электронный дизайн. </p>
            <button className='main__my-button'>Докладніше</button>
          </article>
          <article className='main__my-article-rigth'>
            <img alt='Юлія Ющенко' className='main__my-img' src={BigFoto} />
            <div className='main__my-div_rectangle-top'></div><div className='main__my-div_rectangle-left'></div>
            sdfzsdfvdfvdv
          </article>
        </section></div>
        <div className='container'>
          <section className='books'></section>
        </div>
      </main>
    )
  }

}
export default Main;