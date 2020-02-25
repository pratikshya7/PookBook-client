import axios from 'axios';
import AppConstants from '../_constants/appConstants';

//service to return all the recipe from firebase database.
export default function GetAllRecipes() {
    return axios.get(AppConstants.apiURL + "/GetAllRecipe")
    .then (res => res.data)
    .catch(err => err.message)
}