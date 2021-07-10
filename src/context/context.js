import React, { useState, useEffect } from 'react';
import Card from '../components/Card/index';
import styled from '@emotion/styled';
import axios from 'axios';

function FetchMeals() {
    const [meals, setMeals] = useState([]);
    const [mealLoaded, setMealLoaded] = useState(false);

    useEffect(() => {
        setMealLoaded(false);
        axios.get("https://asm-dev-api.herokuapp.com/api/v1/food")
        .then(response => {
            setMeals(response.data.data.meals);
            setMealLoaded(true);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <PageLayout>
                {mealLoaded ? (
                    meals.slice(0, 6).map(meal => (
                        <Card key={meal.id}  
                        strMeal={meal.strMeal} 
                        strMealThumb={meal.strMealThumb} 
                        price={meal.price} 
                        description={meal.description} />
                    )) 
                    ) : (
                        <p>Loading...</p>
                    )
                }
        </PageLayout>
    )
}

export default FetchMeals;

const PageLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px;
    @media only screen and (max-width: 1312px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 867px) {
        grid-template-columns: 1fr;
    }
`;