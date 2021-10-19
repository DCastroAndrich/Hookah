import React, { useState } from "react";
import { ButtonGroup, Button, Container, Row } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const addItem = () => {
    if (stock > 0) {
      onAdd = count;
    }

    console.log(onAdd);
  };

  return (
    <Container style={{ width: "10rem" }}>
      <Row>
        <ButtonGroup>
          <Button variant="danger" onClick={handleDecrement}>
            -
          </Button>
          <Container>{count}</Container>
          <Button variant="success" onClick={handleIncrement}>
            +
          </Button>
        </ButtonGroup>
      </Row>
      <Row>
        <Button variant="dark" onClick={addItem}>
          Agregar al carrito
        </Button>
      </Row>
    </Container>
  );
};

export default ItemCount;
