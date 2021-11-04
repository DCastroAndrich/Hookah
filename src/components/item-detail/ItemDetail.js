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

  const { addItem, removeItem } = useContext(CartContext);

  const handleAddItem = () => {
    const item = { id, title, description, price, pictureUrl, stock };
    addItem({ item, count });
    setIsAdded(true);
  };

  const handleRemoveItem = ()=> {
    
    removeItem(id)
  }

  return (
    <CContainer style={{'margin-top': '50px'}}>
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
        {location.pathname !== "/cart" ? null : (
          
            <CCardFooter>
              <CCardSubtitle>
                Se añadieron {count} {title}'s al carrito!
              </CCardSubtitle>
              <CButton color="warning" onClick={handleRemoveItem} >Eliminar producto del carrito </CButton>
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
