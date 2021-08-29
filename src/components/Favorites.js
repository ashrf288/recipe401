import axios from "axios";
import React, { Component } from "react";
import {Card,Button} from 'react-bootstrap';
import './styles.css';
import { withAuth0 } from "@auth0/auth0-react";
export class Favorites extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
   removeHandler=(recipe)=>{
     let id =recipe._id;
      axios.delete(`${process.env.React_APP_BASEURL}/delete/${id}`).then(resp=>{
          console.log(resp.data)
      })

   }
  componentDidMount = () => { 
    if(this.props.auth0.isAuthenticated){
      axios.get(`${process.env.React_APP_BASEURL}/fav/${this.props.auth0.user.email}`).then(resp=>{
        console.log(resp.data);
        
         this.setState({data:resp.data[0].recipes})
      })
    }                        
     
  
  };

  render() {
    return (
      <div className='cardsDiv'>
       {this.state.data.map(recipe=>{
         return(<Card key={recipe._id}  style={{ width: "18rem"}}>
         <Card.Img variant="top" src={recipe.image} />
         <Card.Body>
           <Card.Title>{recipe.name}</Card.Title>
           <p>{recipe.calories} calories</p>
           <Button variant="danger" onClick={e=>this.removeHandler(recipe)}>remove from fav</Button>
         </Card.Body>
       </Card>) 
       })}
      </div>
    );
  }
}

export default withAuth0(Favorites);
