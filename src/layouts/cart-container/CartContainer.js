import {
  CButton,
  CContainer,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../components/cart/Cart";
import UserForm from "../../components/user-form/UserForm";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
  const { items, clear, totalPrice } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

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
                <CButton color="primary" onClick={() => setVisible(true)}>
                  Finalizar Compra
                </CButton>

                <CModal
                  alignment="center"
                  visible={visible}
                  onClose={() => setVisible(false)}
                >
                  <CModalHeader>
                    <CModalTitle>Formulario de Compra</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <UserForm
                      items={items}
                      total={totalPrice().toFixed(2)}
                      clear={handleClear}
                    />
                  </CModalBody>
                </CModal>
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
          <>
            <h2>No hay items agregados al Cart</h2>
            <Link to="/">
              <CButton color="info">Ir al Catálogo de Productos</CButton>
            </Link>
          </>
        )}
      </div>
    </CContainer>
  );
};

export default CartContainer;
