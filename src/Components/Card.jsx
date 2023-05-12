import React from 'react'
import '../CSS/card.css'
const Card = (props) => {
  return (
  <>
    <div className="container">
      <div className="card">
        <div className="front">
          <img src={props.image} alt="" />
        </div>
        <div className="back">
          <h3>{props.title}</h3>
        </div>
      </div>
    </div>
  </>
  )
}

export default Card;
