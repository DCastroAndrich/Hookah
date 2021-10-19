import React from "react";
import { CardGroup } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <CardGroup>
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
          />
        );
      })}
    </CardGroup>
  );
};

export default ItemList;
