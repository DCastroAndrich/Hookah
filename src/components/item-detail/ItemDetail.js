import React from "react";
import {
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

const ItemDetail = ({ id, title, description, price, pictureUrl, stock }) => {

   

  return (
    <CContainer>
      <CCard className="text-center" style={{ width: "18rem" }}>
        <CCardHeader component="h5">{title}</CCardHeader>
        <CCardImage orientation="top" src={pictureUrl} />
        <CCardBody>
          <CCardTitle>{title} </CCardTitle>
          <CCardText>{description}</CCardText>
          <CCardSubtitle>$ {price} </CCardSubtitle>
        </CCardBody>
        <CCardFooter>
          <ItemCount stock={stock} />
        </CCardFooter>
      </CCard>
    </CContainer>
  );
};

export default ItemDetail;
