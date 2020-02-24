import React from 'react';
import './App.css';
import NavBar from './components/Layout/NavBar/NavBar';
import { Row, 
        Col,
        Form,
        Input,
        Container,
      } from 'reactstrap';

import SideBar from './components/Layout/SideBar/SideBar';
import Recipe from './components/RecipeBuilder/Recipe/Recipe';


const app = () =>  {
  return (
    <div className="App">
      <NavBar />
      <Container>
      <Row>
      <Col md="8">      
      <h1> Find the recipe that best fits for you.</h1>
      <Form>
        <Input name="recipe" placeholder="Search the recipe."/>
      </Form>
      <br/>
      <Row>
        <Col md="12">
          <Recipe/>
        </Col>
      </Row>
      </Col>
      <Col md="4">
        <br/>
        <SideBar/>
      </Col>
      </Row>
      <br/>
      </Container>
    </div>
  );
}

export default app;
