import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../item/Item";

const ItemList = ({ items }) => {
  return (
    <Container>
      <CardGroup>
        {items.map((item) => {
          return (
            <Card
              style={{ backgroundColor: "transparent", border: "none" }}
              key={item.id}
            >
              <Link to={`/item/${item.id}`}>
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
    </Container>
  );
};

export default ItemList;
