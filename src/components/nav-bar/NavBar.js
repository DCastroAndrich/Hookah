import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../cart-widget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/img/logo.jpg"
            alt="krishna Hookah"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/category/hookah">Hookah</Nav.Link>
            <Nav.Link href="/category/tabacos">Tabacos</Nav.Link>
            <Nav.Link href="/category/carbones">Carbones</Nav.Link>
            <Nav.Link href="/category/accesorios">Accesorios</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
