import React, {useState} from 'react';
import {
    Nav,
    Button,
} from 'reactstrap';
import RecipeAddModal from '../Recipe/RecipeAddModal';


const SideBar = () => {
    const [addRecipeClicked, setAddRecipeClicked] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

    const addRecipeHandler = () => {
        setAddRecipeClicked(true);
        setToggleModal(!toggleModal);
        console.log(addRecipeClicked);
    };

    return (
        <Nav vertical pills>
            <select>
                <option value=""> Select Cuisine Type</option>
                <option> Nepali</option>
                <option> Indian</option>
                <option>Chinese</option>
            </select>
            <br/>
            <select>
                <option value=""> Select Meal Type</option>
                <option> Breakfast</option>
                <option> Lunch</option>
                <option>Dinner</option>
                <option>Snacks</option>
            </select>
            <br/>
            <select>
                <option value=""> Select Cooking Time</option>
                <option> 30 minute</option>
                <option> 1 hour</option>
                <option>2 hours</option>
                <option>2 plus hours</option>
            </select>
            <br/>
            <Button block color="success" onClick={ () => addRecipeHandler()}>ADD RECIPE</Button>
                {addRecipeClicked ? <RecipeAddModal clicked={toggleModal}/> : null}
     </Nav>
    )
}

export default SideBar;