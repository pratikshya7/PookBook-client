import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg, 
    CardSubtitle,
    CardTitle,
} from 'reactstrap';
import {Link} from 'react-router-dom';


const RecipeCard = (props) => {
    const {recipe} = props;

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
                            }}>View Details</Link>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default RecipeCard;