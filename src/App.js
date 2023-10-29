import React from 'react'

import './App.css'

import Comments from '../src/components/comments/Comments';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Rout from './Rout';


function App() {
  

  return (
    <div className={'wr'}>
      <Header />
      <Rout/>
      <Footer/>
      {/* <Comments/> */}
    </div>

  )


}

export default App;
