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

const ItemDetail = ({ item }) => {
  return (
    <CContainer>
      <CCard className="text-center" style={{ width: "18rem" }}>
        <CCardHeader component="h5">{item.title}</CCardHeader>
        <CCardImage orientation="top" src={item.pictureUrl} />
        <CCardBody>
          <CCardTitle>{item.title} </CCardTitle>
          <CCardText>{item.description}</CCardText>
          <CCardSubtitle>$ {item.price} </CCardSubtitle>
        </CCardBody>
        <CCardFooter>
          <ItemCount />
        </CCardFooter>
      </CCard>
    </CContainer>
  );
};

export default ItemDetail;
