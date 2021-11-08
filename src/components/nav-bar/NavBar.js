import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import CartWidget from "../cart-widget/CartWidget";

const NavBar = () => {
  const history = useHistory();

  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand onClick={() => history.push("/")}>
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
            <Nav.Link onClick={() => history.push("/category/hookah")}>
              Hookah
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/category/tabacos")}>
              Tabacos
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/category/carbones")}>
              Carbones
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/category/accesorios")}>
              Accesorios
            </Nav.Link>
            <Nav.Link onClick={() => history.push("/category/contacto")}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
