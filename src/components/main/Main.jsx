import './style.css'
import React from 'react';


import Karysel from './Karysel';

import NewBooks from './NewBooks';
import Contact from './Contact';
import Home from './Home';
import Events from './Events';


function Main() {
    return (
      <>
        <Home/>
        <NewBooks/>
        <Karysel/>
        <Events/>
        <Contact/>
      </>
    )

}
export default Main;