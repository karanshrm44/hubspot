import React from 'react';
import './FooterCard.css';


const FooterCard = (props) => {
    console.log(props.val);
    var cardRow = props.val.map((row,index)=>{
      if(index === 0)
      return <label className="cardHeading" key={index}>{row}</label>
      return <p className="cardContent" key={index}>{row}</p>
    })     
    return(
        <div className="col-md-3">
            {cardRow}
        </div>
    )
}

export default FooterCard;