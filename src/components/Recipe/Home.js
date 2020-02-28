import React, {useEffect, useState} from 'react';
import {recipeService} from '../../_services/recipeService';
import RecipeCard from './RecipeCard';
import {
    Input,
    Spinner,
} from 'reactstrap';

const Home = (props) => {
    const [recipe, setRecipe] = useState([]);
    const [recipeFilteredValue, setRecipeFilteredValue] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        recipeService.GetAllRecipes().then(rec => {
            //console.log('Recipe is ', rec);
            setRecipe(rec);
            setRecipeFilteredValue(rec);
            setLoading(false);
        });
    }, []);

    const searchInputChangeHandler = (event) => {
        setRecipeFilteredValue(recipe.filter(x => x.dishName.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1))
    }

    let recipeCard;
    if(loading){
        recipeCard =  <Spinner color="primary"style={{ width: '5rem', height: '5rem' }} />
    }
    else {
        recipeCard =
        (
            <React.Fragment>
            {recipeFilteredValue.map( r => 
                <div key={r.dishName}>
                    <RecipeCard recipe={r} recipeId={r.dishName}/>
                    <br/>
                </div>
                )}
            </React.Fragment>   
        );
    }

    return(
        <React.Fragment>
            <h3>Find the recipe that tastes best for you!</h3>
            <Input onChange={searchInputChangeHandler} type="text" placeholder="Search Recipe"/>
            <br/>
            {recipeCard}
        </React.Fragment>
    )
}

export default Home;