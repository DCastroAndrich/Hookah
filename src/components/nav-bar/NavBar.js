import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import CartWidget from "../cart-widget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" colorScheme="dark" className="bg-dark" fixed="top">
      <CContainer fluid>
        <CNavbarBrand onClick={() => history.push("/")}>
          <img
            src="/img/android-chrome-192x192.png"
            alt="krishna Hookah"
            width="75"
            height="75"
            className="d-inline-block align-top"
          />
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink
                to="/category/Hookah"
                onClick={() => history.push("/category/Hookah")}
                className="cNavLink"
              >
                Hookah
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                to="/category/Tabacos"
                onClick={() => history.push("/category/Tabacos")}
                className="cNavLink"
              >
                Tabacos
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                to="/category/Carbones"
                onClick={() => history.push("/category/Carbones")}
                className="cNavLink"
              >
                Carbones
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                to="/category/Accesorios"
                onClick={() => history.push("/category/Accesorios")}
                className="cNavLink"
              >
                Accesorios
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                to="/category/Contacto"
                onClick={() => history.push("/category/Contacto")}
                className="cNavLink"
              >
                Contacto
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
        <CartWidget />
      </CContainer>
    </CNavbar>
  );
};

export default NavBar;
