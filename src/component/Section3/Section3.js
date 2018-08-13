import React from 'react';
import Product1 from './Images/product1.svg';
import './Section3.css';

const Section3 = () => {

    return(
        <div style={{background:"#f5f8fa"}}>
            <section className="home_product_feature hsg_page_width">
                <div className="home_product_feature_full_width">
                   <div className="home_product_feature_full_width_image">
                     <img src={Product1} alt="product1" />
                     <div className="home_product_feature_full_width_button">
                        <a href="">Learn More</a>
                    </div>
                   </div>
                   <div className="home_product_text">
                       <h4>Free HubSpot CRM</h4>
                       <p>
                          Everything you need to organize, track, and build better relationships<br></br>
                          with leads and customers. Yes, it's 100% free. Forever.
                       </p>
                       <div>
                       
                       <span>POPULAR FEATURES</span>
                       
                       </div>
                       <div className="home_growth_list">
                           <p>Contact Insight</p>
                           <p>Deals</p>
                           <p>Tasks</p>
                       </div>
                   </div>
                </div>
            </section>
        </div>
    )
}

export default Section3;