import React, { Component } from 'react';
import FooterCard from './FooterCard';
import HubspotLogo from './images/HubspotLogo.svg';
import './Footer.css';

class  Footer extends Component {
    state={
        arr:[
            ["Increase Your Traffic","Ad Software","Blog Software","SEO Software","Social Media Software","Content Managemenet System"],
            ["Connect With Leads","Find New ProsPects","Email Tracking","Sales Email Templates","Click to Call Your Leeds","Email Scheduling"],
            ["Choose and Manage Leads","Document Tracking Tool","Meeting Schedule Tool","Sales Automation Too","Lead Management Tool","Pipeline Management Tool"],
            ["Supports and Tools","HubSpot Partners","Join a Local User Group","Get a Free Website Report","HubSpot Templates"]
        ]
    }
    
    render(){

    var cardDisplay = this.state.arr.map((val,index)=>{
        return <FooterCard val={val} key={index}/>

    })

    return(
        <footer id="hsg_footer">
           <div className="hsg_footer_layout">
                <div className="container">
                    <div className="row">
                        {cardDisplay}
                    </div>
                </div>
            
            <section className="hsg_footer_language">
                <ul>
                    <li><a href="">English</a></li>
                    <li><a href="">Deutsch</a></li>
                    <li><a href="">日本語</a></li>
                    <li><a href="">Español</a></li>
                    <li><a href="">Português</a></li>
                    <li><a href="">Français</a></li>
                </ul>
            </section>
            <section className="hsg_footer_bottom">
                <div>
                    <a href="//www.localhost:3000">
                      <img src={HubspotLogo} alt=""/>
                    </a>
                     <p>
                     Copyright © 2018 HubSpot, Inc.
                    </p>
                </div>
                <div className="hsg_footer_copyright">
                    <ul>
                        <li><a href="">Legal Stuff</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
            </section>
           </div>
        </footer>
    )
}
}

export default Footer;