import {
  CButton,
  //CCloseButton,
  CCol,
  CContainer,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  //COffcanvas,
  //COffcanvasBody,
  //COffcanvasHeader,
  //COffcanvasTitle,
  CRow,
} from "@coreui/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../components/cart/Cart";
import UserForm from "../../components/user-form/UserForm";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { items, clear, totalPrice } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const handleClear = () => {
    clear();
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <h1>Este es el CartContainer</h1>
      <div>
        {items.length > 0 ? (
          <>
            <Cart items={items} />

            <CContainer>
              <CRow>
                <CCol md={12}>
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

                    {/* <COffcanvas placement="end" visible={visible} onHide={()=> setVisible(false)}>
                    <COffcanvasHeader>
                      <COffcanvasTitle>Formulario de Compra</COffcanvasTitle>
                      <CCloseButton className="text-reset" onClick={()=> setVisible(false)} />
                    </COffcanvasHeader>
                    <COffcanvasBody>
                      <UserForm items={items} total={totalPrice().toFixed(2)} clear={handleClear}/>
                    </COffcanvasBody>

                  </COffcanvas> */}
                  </div>
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
