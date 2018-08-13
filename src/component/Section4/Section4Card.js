import React from 'react';
import './Section4Card.css';

const Section4Card = (props) => {

    return(
        <div className="product_name">
           <img src={props.item[0]}  alt="productOne"/>
           <h4>{props.item[1]}</h4>
           <p>{props.item[2]}</p>
           <p></p>
           <p className="product_name_static">product features</p>
           <ul>
            <li>{props.item[3]}</li>
            <li>{props.item[4]}</li>
            <li>{props.item[5]}</li>
           </ul>
           <div>
               <a href="">Learn More</a>
           </div>    
        </div>
    )
}

export default Section4Card;