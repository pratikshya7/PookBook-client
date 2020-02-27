import axios from 'axios';
import AppConstants from '../_constants/appConstants';

export const recipeService = {
    GetAllRecipes,
    AddNewRecipe,
}

//service to return all the recipe from firebase database.
function GetAllRecipes() {
    return axios.get(AppConstants.apiURL + "/GetAllRecipe")
    .then (res => res.data)
    .catch(err => err.message)
}

//service to add a new recipe to the firebase database
function AddNewRecipe(recipeToPost){
    return axios.post(AppConstants.apiURL + "/addRecipe", recipeToPost)
    .then(res => res.data)
    .catch(err => console.log(err))
}

