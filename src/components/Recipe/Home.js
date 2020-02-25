import React, {useEffect, useState} from 'react';
import GetAllRecipes from '../../_services/recipeService';
import RecipeCard from './RecipeCard';
import {
    Input,
} from 'reactstrap';

const Home = (props) => {
    const [recipe, setRecipe] = useState([]);
    const [recipeFilteredValue, setRecipeFilteredValue] = useState([])

    useEffect(()=> {
        GetAllRecipes().then(rec => {
            console.log('Recipe is ', rec);
            setRecipe(rec);
            setRecipeFilteredValue(rec);
        })
    }, []);

    const searchInputChangeHandler = (event) => {
        setRecipeFilteredValue(recipe.filter(x => x.dishName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1))
    }

    return(
        <React.Fragment>
            <h3>Find the recipe that tastes best for you!</h3>
            <Input onChange={searchInputChangeHandler} type="text" placeholder="Search Recipe"/>
            <br/>
                {recipeFilteredValue.map( r => 
                <div key={r.dishName}>
                    <RecipeCard recipe={r}/>
                </div>
            )}
        </React.Fragment>
    )
}

export default Home;