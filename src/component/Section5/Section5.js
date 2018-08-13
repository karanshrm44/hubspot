import React, { Component } from 'react';
import Section5Card from './Section5Card';
import detail1 from './images/detail1.svg';
import detail2 from './images/detail2.svg';
import detail3 from './images/detail3.svg';
import detail4 from './images/detail4.svg';
import detail5 from './images/detail5.svg';
import detail6 from './images/detail6.svg';
import detail7 from './images/detail7.svg';
import detail8 from './images/detail8.svg';
import './Section5.css';

class Section5 extends Component {

       state = {
           arr:[
               [detail1,"150+","HubSpot user groups"],
               [detail2,"4.5M+","monthly visits"],
               [detail3,"149K+","certified professionals"],
               [detail4,"21k+","registered attendees"],
               [detail5,"175+","integration partners"],
               [detail6,"6","languages"],
               [detail7,"2.6M+","social Followers"],
               [detail8,"5k+","profiles and counting"]
           ]
       }

        render() {

            var result = this.state.arr.map(item=>{
                return <Section5Card item={item} />
            })

            return(
                <div className="product_detail_layout">
                    <div className="product_detail_width">
                    <h2>
                        Learn and grow with award-winning support<br></br> and a thriving community behind you.
                    </h2>
                    <p>
                        You don't have to go it alone. Master the inbound methodology and get
                        the most out of your tools<br></br> with HubSpot's legendary customer 
                        support team and a community of thousands of marketing and<br></br>
                        sales pros just like you.
                    </p>
                    <div className="product_detail_grid_wrapper">
                        {result}
                    </div>

                    </div>
                </div>
            )
        }
    
}

export default Section5;