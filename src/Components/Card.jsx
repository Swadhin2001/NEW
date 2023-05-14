import React from 'react'
import '../CSS/card.css'
const Card = (props) => {
  const html = props.summary;
  const obj = { __html: html };
  return (
    <>
      <div className="container1">
        <div className="card">
          <div className="front">
            <div class="card" style={{ width: "18rem" }}>
              <img src={props.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
              </div>
            </div></div>
          <div className="back">
            <div dangerouslySetInnerHTML={obj} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
