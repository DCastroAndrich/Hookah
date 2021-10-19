import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    
      <Card>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title} </Card.Title>
          <Card.Text>{description} </Card.Text>
          <Card.Text> $ {price} </Card.Text>
        </Card.Body>
        <ItemCount />
      </Card>
    
  );
};

export default Item;
