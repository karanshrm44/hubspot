import React from 'react';
import './Section6.css';
import cust1 from './images/cust1.webp';
import cust2 from './images/cust2.webp';
import cust3 from './images/cust3.webp';
import cust4 from './images/cust4.webp';
import cust5 from './images/cust5.webp';
import cust6 from './images/cust6.webp';
import cust7 from './images/cust7.webp';
import cust8 from './images/cust8.webp';


const Section6 = () => {
    return(
        <section className="home_customers">
           <div className="hsg_page_width_normal">
                <div className="home_customer_content_wrapper">
                     <div className="home_customer_text_wrapper">
                         <h2 className="home_customer_stat">44,500</h2>
                         <p className="home_customer_stat-description">
                            customers in over <strong>90</strong><br></br>
                            countries growing their<br></br>
                            business with 
                            hubspot
                         </p>
                     </div>
                     <div className="home_customer_logo">
                        <div className="home_customer_logo_wrapper">
                           <img src={cust1} alt="firstImage" />
                        </div>
                        <div className="home_customer_logo_wrapper">
                           <img src={cust2} alt="secondImage" />
                        </div>
                        <div className="home_customer_logo_wrapper">
                           <img src={cust3} alt="thirdImage" />
                        </div>
                        <div className="home_customer_logo_wrapper">
                           <img src={cust4} alt="fourthImage" />
                        </div>
                        <div className="home_customer_logo_wrapper">
                          <img src={cust5} alt="fifthImage" />
                        </div>
                        <div className="home_customer_logo_wrapper">
                          <img src={cust6} alt="sixthImage" />
                        </div>
                        <div className="home_customer_logo_wrapper">
                          <img src={cust7} alt="seventhImage" />
                        </div>
                        <div className="home_customer_logo_wrapper">
                          <img src={cust8} alt="eigthImage" />
                        </div>
                     </div>
                </div>
           </div>
        </section>
    )
}

export default Section6;
