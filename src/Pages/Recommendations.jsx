import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import background from '../Assets/Image_2.jpg'

const Recommendations = () => {
    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        Recommendation();
    }, []);

    const Recommendation = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?number=9&apiKey=5b1fe8d634e547b5850d2a2d79614a9d`);

        const data = await api.json();
        console.log(data);
        setRecommendation(data.recipes);
    }

    return (
        <>
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <h1 style={{ textAlign: "center", padding: "40px", fontWeight: "bolder", color: "white" }}> Recommendation</h1>
            <div className="card-group">
                {
                    recommendation.map((recipe) => {
                        return (
                            <div className="col-4 my-0">
                                <div key={recipe.id}>
                                    <Card image={recipe.image} title={recipe.title} summary={recipe.summary} />
                                </div>
                            </div>

                        );
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Recommendations;
