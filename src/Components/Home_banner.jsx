import React, { useState } from 'react'
import NavGraph from './NavGraph';
import '../CSS/home_banner.css'
import para from '../JSON/Body_paragraph.json'
function Home_new() {
    const [heading,setHeading] = useState (para.home.heading)
    const [paragraph, setParagraph]=useState(para.home.details)
    const onHoverRecommendation =()=>{
        setHeading (para.recommendation.heading);
        setParagraph(para.recommendation.details);
    }
    const onHoverAnalyser =()=>{
        setHeading (para.analyzer.heading);
        setParagraph(para.analyzer.details);
    }
    const onHoverCalculator =()=>{
        setHeading (para.calculator.heading);
        setParagraph(para.calculator.details);
    }
    const onHoverVitality =()=>{
        setHeading (para.vitality.heading);
        setParagraph(para.vitality.details);
    }
    const onHoverInsights =()=>{
        setHeading (para.insights.heading);
        setParagraph(para.insights.details);
    }
    const out =()=>{
        setHeading (para.home.heading);
        setParagraph(para.home.details);
    }
  return (
    <>
        <div className="body">

            <div className="home-body">
                <div className="body-para" style ={{width: "30%"}}>
                    <h1>{heading}</h1>
                    <p>{paragraph}</p>
                </div>
                <div className="body-img" style ={{width: "49%"}} >
                    <NavGraph recommendationIn ={onHoverRecommendation}  analyserIn = {onHoverAnalyser}  calculatorIn ={onHoverCalculator} vitalityIn ={onHoverVitality} insightsIn ={onHoverInsights} mouseout ={out}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home_new
