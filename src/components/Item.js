import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Item.css";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <Card className="card" >
      <Card.Img className="cardImg" variant="top" src={pictureUrl} />
      <Card.Body className="cardBody">
        <Card.Text>$ {price}</Card.Text>
        <Card.Title>{title} </Card.Title>
        <Button size="sm" variant="dark">
          Description
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
