import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const items = [
  {
    id: "1",
    title: "Nike Evospeed",
    description: "Botines de futbol",
    price: "40",
    pictureUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Nike Zoom",
    description: "Zapatillas",
    price: "10",
    pictureUrl: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Adidas Adipure",
    description: "Zapatillas",
    price: "15",
    pictureUrl: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "Puma Exospeed",
    description: "Botines",
    price: "23",
    pictureUrl: "https://via.placeholder.com/150",
  },
];

function ItemListContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const task = new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });

  task
    .then((result) => {
      setData(result);
    })
    .catch(console.error("Error in progress!!"))
    .finally(() => {
      setIsLoading(false);
    });

  return (
    <Container fluid className="itemListContainer">
      <h3>Bienvenidos</h3>
      {isLoading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <ItemList items={data} />
    </Container>
  );
}

export default ItemListContainer;
