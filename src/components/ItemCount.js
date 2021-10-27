import { cilMinus, cilPlus } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CButtonGroup, CContainer, CRow } from "@coreui/react";
import React, { useState } from "react";

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
    <CContainer style={{ width: "10rem" }}>
      <CRow>
        <CButtonGroup>
          <CButton color="danger" variant="ghost" onClick={handleDecrement}>
            <CIcon icon={cilMinus} size="sm" />
          </CButton>
          <CContainer>{count}</CContainer>
          <CButton color="success" variant="ghost" onClick={handleIncrement}>
            <CIcon icon={cilPlus} size="sm" />
          </CButton>
        </CButtonGroup>
      </CRow>
      <CRow>
        <CButton color="warning" variant="outline" onClick={addItem}>
          Agregar al carrito
        </CButton>
      </CRow>
    </CContainer>
  );
};

export default ItemCount;
