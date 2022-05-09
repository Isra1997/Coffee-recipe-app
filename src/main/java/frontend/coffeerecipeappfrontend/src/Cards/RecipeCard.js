import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import {Col, Row} from 'react-bootstrap';
import "./RecipeCard.css";
import { useSearchParams } from "react-router-dom";



export default function RecipeCard({ temperature }){
        //set the state of the component
        const [drinks,setDrinks] = useState([]);

        //get the search parameters
        const [searchParameter,setSearchParameter] = useSearchParams();

        //make an API call to load all the drinks
        useEffect(()=>{
            axios.get(process.env.REACT_APP_BASE_URL+"/"+temperature)
            .then((res)=>{
                setDrinks(res.data)
            })
        },[temperature]);

        //create a JSX with the result of the API
        const drinksJSX = drinks.filter(drink =>{
          let filter = searchParameter.get("searchQuery");
          if(!filter &&  drink.description.toLowerCase().indexOf("koray") === -1) return true;
          let name = drink.title.toLowerCase();
          return (name.startsWith(filter.toLocaleLowerCase()) && drink.description.toLowerCase().indexOf("koray") === -1)
        }).map(drink =>{
           let count = 0;
           let cardImg = "";
           try{
            cardImg = require("../assets/"+drink.title.replace(/\s/g, '')+".jpg");
           }catch(e){
            cardImg = require("../assets/Black.jpg");
           }
         
           return (
              <Col>
              <br/>
                <Card key={drink.id}>
                  { <Card.Img  variant="top"  src={cardImg} style={{ aspectRatio:1/2}} /> }
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
             <Row xs={1} md={4}>
                {drinksJSX}
            </Row>
            </div>
        )
}