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
} from "@coreui/react";

import ItemCount from "../components/ItemCount"


const ItemDetail = ({item}) => {
  return (
    <CCard className="text-center" style={{ width: "18rem" }}>
      <CCardHeader component="h5">{item.title}</CCardHeader>
      <CCardImage
        orientation="top"
        src={item.pictureUrl}
      />
      <CCardBody>
        <CCardTitle>{item.title} </CCardTitle>
        <CCardText>
          {item.description}
        </CCardText>
        <CCardSubtitle>$ {item.price} </CCardSubtitle>
      </CCardBody>
      <CCardFooter>
        <ItemCount />
      </CCardFooter>
    </CCard>
  );
};

export default ItemDetail;