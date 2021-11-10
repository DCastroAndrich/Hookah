import React from "react";
import { Card } from "react-bootstrap";
import "./Item.css";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <>
      <Card.Img className="cardImg" variant="top" src={pictureUrl} />
      <Card.Body className="cardBody">
        <Card.Text>$ {price}</Card.Text>
        <Card.Title>{title} </Card.Title>
      </Card.Body>
    </>
  );
};

export default Item;
