import React from 'react';
import './Section5Card.css';

const Section5Card = (props) => {

    return(
        <div className="product_detail_grid_layout">
            <img src={props.item[0]} alt="details_image" />
            <h1>{props.item[1]}</h1>
            <p>{props.item[2]}</p>
        </div>
    )
}

export default Section5Card;