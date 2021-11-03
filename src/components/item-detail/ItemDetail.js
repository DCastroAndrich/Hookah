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
  CContainer,
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

  const { addItem } = useContext(CartContext);

  const handleAddItem = () => {
    const item = { id, title, description, price, pictureUrl, stock };
    addItem({ item, count });
    setIsAdded(true);
  };

  return (
    <CContainer style={{'margin-top': '150px'}}>
      <CCard className="text-center" style={{ width: "18rem" }}>
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
                  <CButton color="info" onClick={handleAddItem}>
                    Agregar al carrito
                  </CButton>
                )}
              </>
            )}
          </CCardFooter>
        ) : (
          <>
            {count > 0 && (
              <CCardFooter>
                <Link to="/cart">
                  <CButton color="primary">Ir al carrito</CButton>
                </Link>
              </CCardFooter>
            )}
          </>
        )}
        {location.pathname === "/cart" && (
          
            <CCardFooter>
              <CCardSubtitle>
                Se añadieron {count} {title}'s al carrito!
              </CCardSubtitle>
              <Link to="/">
                  <CButton color="secondary">Volver</CButton>
                </Link>
            </CCardFooter>
          
        )}
      </CCard>
    </CContainer>
  );
};

export default ItemDetail;
