import Container from "react-bootstrap/Container"
import RecipeCard from "./Cards/RecipeCard"
export default function MainPage(){
  return(
    <Container>
      <h1>Cold Coffee Drinks</h1>
      <RecipeCard temperature='cold'/>
      <h1>Hot Coffee Drinks</h1>
      <RecipeCard temperature='hot'/>
    </Container>
  )
}
