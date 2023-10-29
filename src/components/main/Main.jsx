import './style.css'
import React from 'react';


import Karysel from './Karysel';

import NewBooks from './NewBooks';
import Contact from './Contact';
import Home from './Home';


function Main() {
    return (
      <>
        <Home/>
        <NewBooks/>
        <Karysel/>
        <Contact/>
      </>
    )

}
export default Main;