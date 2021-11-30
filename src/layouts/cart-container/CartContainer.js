import { CButton, CContainer } from "@coreui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
  const { items, clear, totalPrice } = useContext(CartContext);

  const handleClear = () => {
    clear();
  };

  return (
    <CContainer fluid className="cartContainer">
      <div>
        {items.length > 0 ? (
          <>
            <Cart items={items} />

            <CContainer fluid className="btnContainer">
              <h3>Total de la compra: $ {totalPrice().toFixed(2)}</h3>
              <div>
                <Link to="/checkout">
                  <CButton color="primary">Finalizar Compra</CButton>
                </Link>
              </div>
              <CButton color="danger" onClick={handleClear}>
                Vaciar carrito
              </CButton>
              <Link to="/">
                <CButton color="info">Volver</CButton>
              </Link>
            </CContainer>
          </>
        ) : (
          <CContainer fluid style={{ textAlign: "center", color: "aqua" }}>
            <h2>No hay items agregados al Cart</h2>
            <Link to="/">
              <CButton color="info">Ir al Catálogo de Productos</CButton>
            </Link>
          </CContainer>
        )}
      </div>
    </CContainer>
  );
};

export default CartContainer;
