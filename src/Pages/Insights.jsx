import React, { useEffect, useState } from 'react'
import NewsCard from '../Components/News_card.jsx'
import background from '../Assets/Image_3.jpg'
const News = () => {
  const [news,setNews] = useState([]);

  useEffect(()=> {
    News();
  },[]);

  const News = async () => {
    const api = await fetch (`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=c1140c97f3534fdfbd27fb36967a86a9`);

    const data = await api.json();
    setNews(data.articles);
  }

  return (
    <>
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
    <h1 style ={{textAlign: "center", padding: "40px", fontWeight:"bolder", color: "white"}}>Insights</h1>
    <div className="container-sm-3 mx-5">
        <div className="row ">
            {
                news.map((val,index)=>{
                    return(
                        <NewsCard image = {val.urlToImage} title = {val.title} description ={val.description} link = {val.url} key ={index}/>
                    );
                })
            }
            </div>
        </div>
        </div>
    </>
  )
}

export default News;
