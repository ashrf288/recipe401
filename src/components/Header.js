import React, { Component } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./logoutButton";
import Button from "@restart/ui/esm/Button";
import { withAuth0 } from "@auth0/auth0-react";
import './styles.css'
import { Link } from "react-router-dom";
import axios from "axios";
export class Header extends Component {

componentDidUpdate=()=>{
  if(this.props.auth0.isAuthenticated){
    axios.post(`${process.env.React_APP_BASEURL}/addUser/${this.props.auth0.user.email}`).then(resp=>{
      console.log(resp.data)
    })
  }else{ console.log('welcome back')}
 
}
  

  

  render() {
    return (
      <div className='header'>
          <h1>Recipes </h1>
          <nav className='navBar'>
         <Button variant="primary"><Link className='link' to='/'>HOME</Link></Button>{' '} 
         {this.props.auth0.isAuthenticated &&  (<button variant="primary"><Link className='link' to='/fav'>Favorites</Link></button>)}
        {this.props.auth0.isAuthenticated ?  <LogoutButton /> :<LoginButton onClick={(e)=>this.addUser(e)}/>}
       
        </nav>
      </div>
    );
  }
}

export default withAuth0(Header);
