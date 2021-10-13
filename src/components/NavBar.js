import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="#home">Krishna Hooka's</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#hooka">Hooka</Nav.Link>
              <Nav.Link href="#tabacos">Tabacos</Nav.Link>
              <Nav.Link href="#carbones">Carbones</Nav.Link>
              <Nav.Link href="#accesorios">Accesorios</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    )
}

export default NavBar
