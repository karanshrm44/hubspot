import React from 'react';
import HubspotLogo from './images/hubspotLogo.svg';
import './HeaderBelow.css';

const HeaderBelow = () => {

    return(
        <div className="hsg_belowheader_layout">
           <div className="hsg_belowheader_width">
              <div>
                 <img src={HubspotLogo} alt="hubspot_image" width="100%"/>
              </div>
              <div className="hsg_belowheader_rightheader">
                  <ul>
                      <li>Software</li>
                      <li>Pricing</li>
                      <li>Resources</li>
                      <li>
                          Partner
                         
                      </li>
                      <li>About</li>
                  </ul>
              </div>
           </div>
        </div>
    )
}


export default HeaderBelow;