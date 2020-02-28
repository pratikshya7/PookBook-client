import React, { useEffect } from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg, 
    CardSubtitle,
    CardTitle,
    Button,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {recipeService} from '../../_services/recipeService';


const RecipeCard = (props) => {
    const {recipe, recipeId} = props;

    const deleteRecipeHandler = () => {
        alert("Are you sure you want to delete this recipe?" + recipeId)
        let deleteItem = recipeId;
            recipeService.DeleteRecipe(deleteItem).then(res => {
                console.log(res);
               })
               .catch(err => console.log('Error Occurred.' + err))
    }

    return(
        <Card className="text-left">
            <CardBody>
                <Row>
                    <Col md="3">
                        <CardImg style={{ height: '130px' }} top width="100%" src={recipe.imageUrl} alt={recipe.dishName} />
                    </Col>
                    <Col md="9">
                        <CardTitle><h5>{recipe.dishName}</h5></CardTitle>
                        <CardSubtitle>
                            <i>Serves: {recipe.serves} | Prep Time: {recipe.prepTime} | Cooking Time: {recipe.cookTime}</i>
                        </CardSubtitle>
                        <br/>
                        <Link 
                            className="btn btn-info" 
                            to={{
                                pathname: "/details",
                                state:{
                                    recipeDetails:recipe,
                                }
                            }}>View Details</Link> &nbsp;
                        <Button color="danger" btn btn-md onClick={deleteRecipeHandler} recipeId ={recipeId}>Delete</Button>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default RecipeCard;