import React from 'react';
import {navlinks} from './contains'
import {Link} from 'react-router-dom'
import '../css/index.css'

const Nav =()=>{

    return(
        <nav>
        <div className="nav-center">
           <Link to="/">CHRISDEV</Link>
          <ul className="nav-links">
            {
              navlinks.map( (node, index) =>{
                return(
                  <li key={index}>
              <a
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
              >
               {node.icon}
              </a>
            </li>
                )
                })
              }
          </ul>
        </div>
      </nav>
    )
}

export default Nav