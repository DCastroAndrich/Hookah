import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../item/Item";

const ItemList = ({ items }) => {
  return (
    <CardGroup>
      {items.map((item) => {
        return (
          <Card
            style={{ backgroundColor: "transparent", border: "none" }}
            key={item.id}
          >
            <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
              <Item
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                pictureUrl={item.pictureUrl}
              />
            </Link>
          </Card>
        );
      })}
    </CardGroup>
  );
};

export default ItemList;
