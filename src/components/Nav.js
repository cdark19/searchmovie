import React from 'react';
import Facebook from '../icons/Facebook'
import Linkedin from '../icons/Linkedin'
import Twitter from '../icons/Twitter'


const Nav =()=>{
    return(
        <nav>
        <div className="nav-center">
           <h4>CHRISWEB</h4>
          <ul className="nav-links">
            <li>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook height={35} width={35} />
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin height={35} width={35} />
              </a>
            </li>
            <li>
              <a
                href="http://www.twitter.com"
                traget="_blank"
                rel="noopener noreferrer"
              >
                <Twitter height={35} width={35} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav