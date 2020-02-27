import React, { useEffect, Fragment } from 'react';
import Parser from 'html-react-parser';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Container,
    Row,
    Col,
    Badge,
} from 'reactstrap';

const RecipeDetails = (props) => {
    const {recipeDetails} = props.location.state;
    // useEffect(() => {
    //     console.log('props is ', props.location.state);
    // }, [])

    return (
        <Fragment>
            <Container style={{marginTop:'2%',justifyContent:'center', display:'flex', alignItems:'center'}}>
                <img src={recipeDetails.imageUrl} style={{height:'300px', width:'auto'}}/>
            </Container>
            <Row>
                <Col>
                <h3>{recipeDetails.dishName}</h3>
                <i> Serves: {recipeDetails.serves} | Prep Time: {recipeDetails.prepTime} | Cooking Time: {recipeDetails.cookTime}</i>
                </Col>
            </Row>
            <br/>
            <Card>
                <CardBody>
                <CardTitle>
                    <h5>{recipeDetails.cuisineType} Cuisine &nbsp; 
                    { recipeDetails.mealType.map(m=>
                        <Fragment>
                            <Badge key={m}color="info"> {m}</Badge> &nbsp;    
                        </Fragment>        
                    )} 
                    </h5>
                </CardTitle>
                <hr/>
                <CardSubtitle>INGREDIENTS:</CardSubtitle>
                <CardText>
                    <ul>
                        {recipeDetails.ingredients.map(x=>
                            <li key={x.name}> {x.name}: {x.quantity}</li>
                        )
                        }
                    </ul>
                </CardText>
                <hr/>

                <CardSubtitle>INSTRUCTIONS:</CardSubtitle>
                <CardText>
                    {Parser(recipeDetails.description)}
                </CardText>
                <Button  className="btn btn-md" color="primary" style={{alignItems:'center'}}>CLICK TO START COOKING WITH US..</Button>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default RecipeDetails;