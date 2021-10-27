import { CContainer } from "@coreui/react";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../../components/ItemDetail";

const itemTest = {
  id: "1",
  title: "Nike Evospeed",
  description: "Botines de futbol",
  price: "40",
  pictureUrl: "https://via.placeholder.com/150",
};

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});

  const getItem = new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemTest);
    }, 2000);
  });

  getItem
    .then((result) => {
      setItem(result);
    })
    .catch(console.log("Can't show the product"))
    .finally(() => {
      setIsLoading(false);
    });

  return (
    <CContainer fluid>
      <h2>Producto seleccionado</h2>
      {isLoading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <ItemDetail item={item} />
    </CContainer>
  );
};

export default ItemDetailContainer;