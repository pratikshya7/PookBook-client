import React from 'react';
import {
    Container,
    Col,
    Row,
} from 'reactstrap';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";

import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/SideBar';
import Home from '../components/Recipe/Home';
import RecipeDetails from '../components/Recipe/RecipeDetails';
//import RecipeAdd from '../components/Recipe/RecipeAddModal';

 const hist = createBrowserHistory();

const DefaultLayout = () => {
    return(
        <React.Fragment>
            <NavBar />
                <Container>
                    <Row>
                        <Col md="9">      
                        <Router history={hist}>
                            <Switch>
                                <Route path="/details" component={RecipeDetails}/>
                                {/* <Route path="/addRecipe" component={RecipeAdd}/> */}
                                <Route exact path="/" component={Home}/>
                             </Switch>
                         </Router>  
                        <br/>
                        </Col>
                        <Col md="3">
                         <br/>
                            <SideBar/>
                        </Col>
                    </Row>
                        <br/>
                </Container>
        </React.Fragment>
    )
}

export default DefaultLayout;

 