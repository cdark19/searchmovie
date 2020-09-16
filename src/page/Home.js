import React from 'react';
import Nav from '../components/Nav'
import FormSearch from '../components/FormSearch'

import '../css/index.css'


const Home =()=>{
    return(
        <>
         <Nav />
         <div className="container">
             <FormSearch />
         </div>
         
         </>
    )
}

export default Home