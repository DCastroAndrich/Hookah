import React, { useContext, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImage,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";

import ItemCount from "../item-count/ItemCount";
import { useLocation } from "react-router";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({
  id,
  title,
  description,
  price,
  pictureUrl,
  stock,
  count,
  setCount,
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const location = useLocation();

  const { addItem, removeItem } = useContext(CartContext);

  const handleAddItem = () => {
    const item = { id, title, description, price, pictureUrl, stock };
    addItem({ item, count });
    setIsAdded(true);
  };

  const handleRemoveItem = () => {
    removeItem(id);
  };
  let total = price * count;

  return (
    <CContainer style={{ "margin-top": "50px" }}>
      {location.pathname !== "/cart" ? (
        <CCard className="text-center" style={{ width: "15rem" }}>
          <CCardHeader component="h5">{title}</CCardHeader>
          <CCardImage orientation="top" src={pictureUrl} />
          <CCardBody>
            <CCardTitle>{title} </CCardTitle>
            <CCardText>{description}</CCardText>
            <CCardSubtitle>$ {price} </CCardSubtitle>
          </CCardBody>

          {isAdded !== true ? (
            <CCardFooter>
              {location.pathname === "/cart" ? null : (
                <>
                  <ItemCount stock={stock} count={count} setCount={setCount} />
                  {count > 0 && (
                    <>
                      <CRow>
                        <CCardSubtitle>Precio total: $ {total.toFixed(2)}</CCardSubtitle>
                      </CRow>

                      <CButton color="info" onClick={handleAddItem}>
                        Agregar al carrito
                      </CButton>
                    </>
                  )}
                </>
              )}
            </CCardFooter>
          ) : (
            <>
              {count > 0 && (
                <CCardFooter>
                  <CRow>
                    <CCardSubtitle>
                      Se añadieron {count} unidad/es, por un precio total de ${" "}
                      {total.toFixed(2)}
                    </CCardSubtitle>
                  </CRow>
                  <Link to="/cart">
                    <CButton color="primary">Ir al carrito</CButton>
                  </Link>
                  <Link to="/">
                    <CButton color="secondary">Volver</CButton>
                  </Link>
                </CCardFooter>
              )}
            </>
          )}
          {/* {location.pathname !== "/cart" ? null : (
          <CCardFooter>
            
            <CButton color="warning" onClick={handleRemoveItem}>
              Eliminar producto.{" "}
            </CButton>
            <Link to="/">
              <CButton color="secondary">Volver</CButton>
            </Link>
          </CCardFooter>
        )} */}
        </CCard>
      ) : (
        <CCard className="mb-3" style={{ maxWidth: "540px" }}>
          <CRow className="g-0">
            <CCol md={3}>
              <CCardImage src={pictureUrl} />
            </CCol>
            <CCol md={6}>
              <CCardBody>
                <CCardTitle>{title}</CCardTitle>
                <CCardText>{description}</CCardText>
              </CCardBody>
            </CCol>
            <CCol md={3}>
              <CCardBody>
                <CCardSubtitle>$ {total.toFixed(2)} </CCardSubtitle>
                <CCardText>Items añadidos: {count}</CCardText>
                <CButton color="warning" onClick={handleRemoveItem}>
                  Eliminar producto.{" "}
                </CButton>
              </CCardBody>
            </CCol>
          </CRow>
        </CCard>
      )}
    </CContainer>
  );
};

export default ItemDetail;
