import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import Favorites from './components/Favorites';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
export class App extends Component {

  render() {
    return (
      <div>
         <Router>
         <Header/>
         <Switch>
         <Route path='/' exact component={Cards}/>
         <Route path='/fav' exact component={Favorites}/>
         </Switch>
        </Router>
      </div>
    )
  }
}

export default withAuth0(App); 
