import React from 'react'
import '../CSS/cardflip.css'
function NewCard(props) {
  const html = props.summary;
  const obj = { __html: html };
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="card border-0" style={{width: "100%"}}>
                            <img src={props.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div dangerouslySetInnerHTML={obj} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCard
