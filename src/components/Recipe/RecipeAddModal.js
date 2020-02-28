import React, { Fragment, useState, useEffect } from 'react';
import Select from 'react-select';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 


import {Button,
     Modal, 
     ModalBody, 
     ModalFooter, 
     ModalHeader,
     Form,
     FormGroup,
     Label,
     Input,
     Col,
     Row,
     Table,
    } from 'reactstrap';

import {recipeService} from '../../_services/recipeService';

const RecipeAddModal = (props) => {
    const {clicked} = props;
    const [modal, setModal] = useState(clicked);
    let initialRecipeState = {
        'dishName' : '',
        'imageUrl' : '',
        'cuisineType': '',
        'prepTime' : '',
        'cookTime' : '',
        'serves' : '',
        'mealType' : [],
        'ingredients': [],
        'description':''
    };

    const [recipeToPost, setRecipeToPost] = useState(initialRecipeState);
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientValue, setIngredientValue] = useState('');

    
    const toggle = () => setModal(!modal);

    const recipeFormSubmitHandler = (event) => {
        event.preventDefault(); 
            recipeService.AddNewRecipe(recipeToPost).then(res => {
            console.log(res);
           })
           .catch(err => console.log('Error Occurred.' + err));
           alert("Your recipe has been added to the database. For now refresh the page.");
           setModal(!modal);
           //props.history.push('/home');
       };

    const singleInputChangeHandler = (e) => {
        let temp = recipeToPost;
        temp[e.target.name] = e.target.value;
        setRecipeToPost(temp)
    };

    const mealTypeChangeHandler = (e) => {
        if(e !== null){
            let temp = recipeToPost;
            temp.mealType = [];
            e.forEach( x => temp.mealType.push(x.value));
            setRecipeToPost(temp);
        }
    }

    const descriptionChangeHandler = (value) => {
        let temp = recipeToPost;
        recipeToPost.description =value;
        setRecipeToPost(temp);
    }

    const ingredientNameChangeHandler = (event) => {
        setIngredientName(event.target.value);
    }

    const ingredientValueChangeHandler = (event) => {
        setIngredientValue(event.target.value);
    }

    const addIngredientHandler = () => {
        let temp= {...recipeToPost};
        temp.ingredients.push({
            'name':ingredientName,
            'quantity':ingredientValue,
        })
        setRecipeToPost(temp);
        setIngredientName('');
        setIngredientValue('');       
    }

    const optionsMealType = [
        {value:'Breakfast', label:'Breakfast'},
        {value:'Lunch', label:'Lunch'},
        {value:'Dinner', label:'Dinner'},
        {value:'Snacks', label:'Snacks'},

    ]

    let ingredientList;
    if(recipeToPost.ingredients.length === 0){
        ingredientList = <p>Ingredients have not been added yet. </p>
    }
    else{
        ingredientList = recipeToPost.ingredients.map( (ing, index) => {
            return (
                <tr key={index}>
                    <th> {index + 1}</th>
                    <td>{ing.name}</td>
                    <td>{ing.quantity}</td>
                </tr>
            )
        });
    }
   
    return (
        <Fragment>
             <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Let your recipe be the taste of our kitchen!</ModalHeader>
                    <Form onSubmit={recipeFormSubmitHandler}>
                    <ModalBody>
                        {/* DishName */}
                        <FormGroup>
                            <Label for="dishName">Dish Name</Label>
                            <Input type="text" name="dishName" placeholder="Chicken Teriyaki, Jerk Chicken" onChange={singleInputChangeHandler}/>
                        </FormGroup>

                        {/* Cuisine Type */}
                        <FormGroup>
                            <Label for="cuisineType">Cuisine</Label>
                            <Input type="text" name="cuisineType" placeholder="American" onChange={singleInputChangeHandler}/>
                        </FormGroup> 

                        {/* Prep Time */}
                        <FormGroup>
                            <Label for="prepTime">Prep Time</Label>
                            <Input type="text" name="prepTime" placeholder="30 minutes" onChange={singleInputChangeHandler}/>
                        </FormGroup>

                        {/* Cooking Time */}
                        <FormGroup>
                            <Label for="cookTime">Cooking Time</Label>
                            <Input type="text" name="cookTime" placeholder=" 1 hour" onChange={singleInputChangeHandler}/>
                        </FormGroup> 
                        
                        {/* Serves*/}
                        <FormGroup>
                            <Label for="serves">Serves</Label>
                            <Input type="number" name="serves" placeholder="2 people" onChange={singleInputChangeHandler}/>
                        </FormGroup>

                        {/* Image URL*/}
                        <FormGroup>
                            <Label for="imageUrl">Image URL</Label>
                            <Input type="text" name="imageUrl" placeholder="https://google.com/dishImage" onChange={singleInputChangeHandler}/>
                        </FormGroup>                       

                        {/* Meal Type*/} 
                         <FormGroup>
                             <Label for="mealType">Select Meal Type </Label>
                             <Select name="mealType" options={optionsMealType} isMulti={true} onChange={mealTypeChangeHandler} />
                        </FormGroup>  

                        {/* Ingredients [{name: name, value: value}]   */}
                        <FormGroup>
                            <Row>
                                <Col md="5">
                                <Input type="text" name="ingredientName" value={ingredientName} placeholder="Ingredient" onChange={ingredientNameChangeHandler}/>
                                </Col>
                                <Col md="5">
                                <Input type="text" name="ingredientValue" value={ingredientValue} placeholder="Quantity" onChange={ingredientValueChangeHandler}/>
                                </Col>
                                <Col md="2">
                                    <Button color="success" onClick={addIngredientHandler} name='ingredients'>ADD</Button>
                                </Col>
                            </Row>                       
                        </FormGroup>

                        {/* Table to display the added ingredients  */}
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ingredient</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ingredientList}
                            </tbody>
                        </Table>
                        <hr/>

                        {/* Instructions to cook */}
                        <FormGroup>
                            <Label for="description">Instructions</Label>
                            <ReactQuill name="description" onChange={descriptionChangeHandler} value={recipeToPost.description}/>
                        </FormGroup>
                </ModalBody>
                 <ModalFooter>
                    <Button color="success" onClick={recipeFormSubmitHandler} type="submit">Submit</Button>{' '}
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
                </Form>

            </Modal>
        </Fragment>
    );
}

export default RecipeAddModal;