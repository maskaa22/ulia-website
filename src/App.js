import React from 'react'

import './App.css'

import Comments from '../src/components/comments/Comments';
import Header from '../src/components/header/Header';
import Main from '../src/components/main/Main';
import Footer from '../src/components/footer/Footer';


function App() {


  return (
    <div className={'wr'}>
      <Header/>
      <Main/>
      <Footer/>
      {/* <Comments/> */}
    </div>

  )


}

export default App;
