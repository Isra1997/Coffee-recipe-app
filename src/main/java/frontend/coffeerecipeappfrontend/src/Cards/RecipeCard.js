import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function RecipeCard({ temperature }){
        //set the state of the component
        const [drinks,setDrinks] = useState([]);

        //make an API call to load all the drinks
        useEffect(()=>{
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
                <Card>
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
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
                <Row xs={1} md={2} className="g-4"key={drink.id}>
                </Row>
             {drinksJSX}
            </div>
        )
}