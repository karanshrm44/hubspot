import React from 'react';
import './Header.css';

const Header = () => {

    return(
        <div id="headerBar">
           <div className="headerouterBox">
              <div className="header_inner">
                  <ul>
                      <li><a href="">English</a></li>
                      <li><a href="">Sales:+91 8871636718</a></li>
                  </ul>
              </div>

           </div>
        </div>
    )
}

export default Header;