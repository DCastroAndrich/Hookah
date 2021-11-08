import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { items, clear, totalPrice } = useContext(CartContext);

  const handleClear = () => {
    clear();
  };

  return (
    <div style={{ "margin-top": "150px" }}>
      <h1>Este es el CartContainer</h1>
      <div>
        {items.length > 0 ? (
          <>
            <Cart items={items} />

            <CContainer>
              <CRow>
                <CCol md={12}>
                  <h3>Total de la compra: $ {totalPrice()}</h3>
                  <CButton color="primary">Finalizar Compra</CButton>
                  <CButton color="danger" onClick={handleClear}>
                    Vaciar carrito
                  </CButton>
                  <Link to="/">
                    <CButton color="info">Volver</CButton>
                  </Link>
                </CCol>
              </CRow>
            </CContainer>
          </>
        ) : (
          <>
            <h2>No hay items agregados al Cart</h2>
            <Link to="/">
              <CButton color="info">Ir al Catálogo de Productos</CButton>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
