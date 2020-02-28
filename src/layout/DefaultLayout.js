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
import About from '../components/About/About';
import ContactUs from '../components/ContactUs/ContactUs';
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
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/contactUs" component={ContactUs}/>
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

 