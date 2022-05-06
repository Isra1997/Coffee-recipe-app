import Navbar from 'react-bootstrap/Navbar';
import { Nav, Form, FormControl, Button, Container } from 'react-bootstrap';


export default function NavbarCoffeeApp(){
return(
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">☕ The Coffee Recipe</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/hot">Hot</Nav.Link>
        <Nav.Link href="/cold">Cold</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}