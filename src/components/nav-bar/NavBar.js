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
            <Nav.Link
              to="/category/Hookah"
              onClick={() => history.push("/category/Hookah")}
            >
              Hookah
            </Nav.Link>
            <Nav.Link
              to="/category/Tabacos"
              onClick={() => history.push("/category/Tabacos")}
            >
              Tabacos
            </Nav.Link>
            <Nav.Link
              to="/category/Carbones"
              onClick={() => history.push("/category/Carbones")}
            >
              Carbones
            </Nav.Link>
            <Nav.Link
              to="/category/Accesorios"
              onClick={() => history.push("/category/Accesorios")}
            >
              Accesorios
            </Nav.Link>
            <Nav.Link
              to="/category/Contacto"
              onClick={() => history.push("/category/Contacto")}
            >
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
