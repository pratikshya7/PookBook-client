import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
    Button,
    Row,
    Col
} from 'reactstrap';

const Recipe = (props) => {
    const [recipe, setRecipe] = useState([]);
    
    //fetching recipe from API
    useEffect( () => {
        axios.get("http://localhost:5000/getAllRecipe")
        .then( res => setRecipe(res.data));
    },[])

    return(
        <React.Fragment>
            {
                recipe.map(r => 
                    <div>
                        <Card className="text-left">
                            <CardBody>
                                <Row>
                                    <Col md="3">
                                        <CardImg style={{ height: '130px' }} top width="100%" src={r.imageUrl} alt="Card image cap" />
                                    </Col>
                                    <Col md="9">
                                        <CardTitle><h5>{r.dishName}</h5></CardTitle>
                                        <CardSubtitle>
                                            <i>Serves: {r.serves} | Prep Time: {r.prepTime} | Cooking Time: {r.cookTime}</i>
                                        </CardSubtitle>
                                        <br/>
                                        <Button className="btn btn-sm" color="info" style={{float:'right'}}>Click to View Recipe</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <br/>
                    </div>

                )
            }
            
        </React.Fragment>
    )
}

export default Recipe;
