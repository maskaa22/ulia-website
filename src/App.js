import React from 'react'

import './App.css'

import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import Rout from './Rout';


function App() {
  

  return (
    <div className={'wr'}>
      <Header />
      <Rout/>
      <Footer/>
    </div>

  )


}

export default App;
