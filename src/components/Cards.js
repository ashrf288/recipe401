import axios from "axios";
import React, { Component } from "react";
import {Card,Button} from 'react-bootstrap';
import './styles.css';
import { withAuth0 } from "@auth0/auth0-react";
export class Cards extends Component {
  constructor(){
    super()
    this.state={
      data:[],
      favData:[]
    }
  }
    
  addToFav=(recipe)=>{
    if(this.props.auth0.isAuthenticated){
      axios.post(`${process.env.React_APP_BASEURL}/add/${this.props.auth0.user.email}`,recipe).then(resp=>{
        this.setState({favData:resp.data}) 
        
     })
     
    }else{console.log('please log in first')}
   
  }
  componentDidMount = () => {
      axios.get(process.env.React_APP_BASEURL).then(resp=>{
         this.setState({data:resp.data})
      })
  };
  render() {
    return (
      <div className='cardsDiv'>
       {this.state.data.map(recipe=>{
         return(<Card key={recipe.calories} style={{ width: "18rem"}}>
         <Card.Img variant="top" src={recipe.image} />
         <Card.Body>
           <Card.Title>{recipe.name}</Card.Title>
           <p>{recipe.calories} calories</p>
           <Button variant="primary" onClick={(e)=>this.addToFav(recipe)}>Add recipe to favorite</Button>
         </Card.Body>
       </Card>) 
       })}
      </div>
    );
  }
}

export default  withAuth0(Cards);
