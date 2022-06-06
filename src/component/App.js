import logo from '../shared/images/logo.svg';
import './App.css';

//instead of requesting from a server the react-router renders various components through 'Switch' and the 'Route' component specifies the path
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';////using react-router
//Router, Route and Switch  are components of react-router-dom
// import React, {Component} from 'react';
import Home from './home/Home.js';
import Navbar from './navbar';
import Books from './books';
import Create from './create';
import FormData from './classForm';
import AddBook from './functionForm';

function App() {
  return (
    //the Router component must wrap all the contents of the application
    //Switch makes sure that only one route shows at one time
    //path inside the Route component is THE route of the page for homepage the path will only be '/' 
    <Router>  
      <div className="App">
        <Switch>
          <Route exact path="Books">
            <Books></Books>
          </Route>
          <Route path="/Create">
            <Create></Create>
          </Route>
          <Route exact path="/FormData">
            <FormData></FormData>
          </Route>
          <Route exact path="/">
            <AddBook></AddBook>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;


// dynamic component har lai {{}} ko bhitra halera lekhne