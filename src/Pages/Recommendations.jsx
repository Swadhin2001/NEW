import React, { useEffect, useState } from 'react'
import Cardflip from '../Components/Cardflip';

const Recommendations = () => {
    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        Recommendation();
    }, []);

    const Recommendation = async () => {
        // For set the value in localstorage
        var check = localStorage.getItem("popular");
        if (check){
            setRecommendation(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?number=8&apiKey=5b1fe8d634e547b5850d2a2d79614a9d`);
            const data = await api.json();
            check = localStorage.setItem("popular", JSON.stringify(data.recipes));
            setRecommendation(data.recipes);
            console.log(data.recipes);
        }
    }


    return (
        <>
            <div style={{ backgroundImage: "linear-gradient(rgba(66, 15, 0, 0.986),rgb(23, 0, 61))", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h1 style={{ textAlign: "center", padding: "4%", fontWeight: "bolder", color: "white" }}> Recommendation</h1>
                <div className="container-sm-3 mx-3">
                    <div className="row ">
                        {
                            recommendation.map((recipe) => {
                                return (
                                    <div className="col my-5" key ={recipe.id}>
                                        <div >
                                            <Cardflip image={recipe.image} title={recipe.title} summary={recipe.summary} />
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Recommendations;
