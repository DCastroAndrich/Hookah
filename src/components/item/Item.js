import React from "react";
import {
  CCardBody,
  CCardImage,
  CCardSubtitle,
  CCardTitle,
} from "@coreui/react";
import "./Item.css";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <>
      <CCardImage orientation="top" className="cardImg" src={pictureUrl} />
      <CCardBody className="cardBody">
        <CCardSubtitle>$ {price} </CCardSubtitle>
        <CCardTitle>{title} </CCardTitle>
      </CCardBody>
    </>
  );
};

export default Item;
