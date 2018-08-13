import React from 'react';
import girlImage from './images/girlImage.webp';
import './Section7.css';

const Section7 = () => {
    return(
        <section className="grow_customer">
            <div className="grow_customer_width">
                <div className="grow_customer_content_wrapper">
                 <div className="grow_customer_text_wrapper">
                   <h1>Start Growing With HubSpot<br></br>today</h1>
                   <p className="grow_customer_text">With tools to make every part of your process more human and a <br></br>
                      support team excited to help you, getting started with inbound <br></br>
                      has never been easier.
                   </p>
                   <div className="grow_customer_button">
                      <a className="grow_customer_button_text" href="">Get HubSpot Free</a>
                  </div>
                   <small>Get started with FREE tools, or get more with our premium software.</small>
                 </div>
                 <div className="grow_customer_imagewrapper">
                     <div className="grow_customer_image" >
                       <img src={girlImage} alt="girl_image"  width="375" />
                   </div>
                 </div>
                </div>
            </div>
        </section>
    )
}

export default Section7;