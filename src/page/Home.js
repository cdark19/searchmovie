import React from 'react';
import Nav from '../components/Nav'
import FormSearch from '../components/FormSearch'

import '../css/index.css'


const Home =()=>{
    return(
        <>
        <Nav />
        <div className="container">
         <div className="row">
             <FormSearch />
         </div>
         </div>
         </>
    )
}

export default Home