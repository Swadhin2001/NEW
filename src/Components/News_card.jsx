import React from 'react'
function NewsCard(props) {
  return (
    <>
      <div className="col my-3">
          <div className ="card" style={{width: "18rem"}}>
            <img src={props.image} className ="card-img-top" alt="..."/>
            <div className ="card-body">
                <h5 className ="card-title">{props.title}</h5>
                <p className ="card-text">{props.description}</p>
                <div className="d-grid gap-2">
                  <a href={props.link} className="btn btn-outline-info" target="_blank" rel="noreferrer">Read More</a>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default NewsCard
