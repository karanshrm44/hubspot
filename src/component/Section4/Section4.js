import React, { Component } from 'react';
import Section4Card from './Section4Card';
import Pdetail1 from './images/Pdetail1.svg';
import Pdetail2 from './images/Pdetail2.svg';
import Pdetail3 from './images/Pdetail3.svg';

import './Section4.css';

class Section4 extends Component {
   
    constructor() {
    super();
    this.state = {
       
       arr:[
           [Pdetail1,"Marketing Hub","Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.","Lead Generation","Marketing Automation","Analytics"],
           [Pdetail2,"Sales Hub","Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.","Email Tracking","Meeting Scheduling","Email Automation"],
           [Pdetail3,"Service Hub","Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business.","Tickets","Customer Feedback","Knowledge Base"]
           ],
        
       }}

    
    render() {
      var result = this.state.arr.map(item => {
          return  <Section4Card item={item} />
      })

    return(
        <div style={{background:"#f5f8fa",paddingBottom:'112px'}}>
            <div className="home_product_feature hsg_page_width">
              {result}
            </div> 
        </div>
    )
}
}


export default Section4;