import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



export default function RecipeCard({ temperature }){
        //set the state of the component
        const [drinks,setDrinks] = useState([]);

        //make an API call to load all the drinks
        useEffect(()=>{
          console.log("I am here and I am "+temperature);
            axios.get(process.env.REACT_APP_BASE_URL+"/"+temperature)
            .then((res)=>{
                setDrinks(res.data)
            })
        },[temperature]);

        //create a JSX with the result of the API
        const drinksJSX = drinks.filter(drink => (drink.description.toLowerCase().indexOf("koray") === -1)).map(drink =>{
           let count = 0;
           return (
              <Col>
              <br/>
                <Card>
                  { <Card.Img variant="top" src={require("../assets/coffeeCupTwo.jpg")} style={{ aspectRatio:1/2}} /> }
                  <Card.Body>
                    <Card.Title>{drink.title}</Card.Title>
                    <Card.Text>
                     {drink.description}
                    </Card.Text>
                    <ul>
                     {drink.ingredients.map(ingredient => {
                      return <li key={count++}>{ingredient}</li>
                     })}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
        )});

     
        return(
            <div>
              <h1>{temperature} Coffee Drinks</h1>
             {drinksJSX}
            </div>
        )
}