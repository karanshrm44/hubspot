import React from 'react';
import block from './Images/block.png';
import './Section2.css';

const Section2 = () => {

    return(
        <section className="home_growth_stack">
             <div className="hsg_page_width">
                 <div className="home_growth_stack_logo">
                     <img src={block}  alt="block_image" />
                     <h2 className="home_growth_stack_logo_header">Powerful alone. Better together</h2>
                     <p className="home_growth_stack_logo_description">HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free<br></br>
                        CRM at its core. They’re powerful alone — but even better when used together.
                     </p>
                 </div>
             </div>
        </section>
    )
}

export default Section2;