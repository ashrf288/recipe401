import React, { Component } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./logoutButton";
import Button from "@restart/ui/esm/Button";
import { withAuth0 } from "@auth0/auth0-react";
import './styles.css'
import { Link } from "react-router-dom";
export class Header extends Component {
  render() {
    return (
      <div className='header'>
          <h1>Recipes </h1>
          <nav className='navBar'>
         <Button variant="primary"><Link className='link' to='/'>HOME</Link></Button>{' '} 
         {this.props.auth0.isAuthenticated &&  (<button variant="primary"><Link className='link' to='/fav'>Favorites</Link></button>)}
        {this.props.auth0.isAuthenticated ?  <LogoutButton /> :<LoginButton />}
       
        </nav>
      </div>
    );
  }
}

export default withAuth0(Header);
