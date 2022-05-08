import Container from "react-bootstrap/Container"
import NavbarCoffeeApp from "./Navigation/NavbarCoffeeApp"
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App(){
  return(
    <div>
      <NavbarCoffeeApp/>
      <Container>
      <div className="Jumbotron">
          <h1>👋 Hi there!</h1>
          <p>
            This is as project where you can find all the coffee recipes that you might be interested in. 
          </p>
      </div>
      <h1></h1>
      <Outlet/>
      </Container>
    </div>
  )
}
