import React from "react";
import { CButton, CButtonGroup, CContainer, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMinus, cilPlus } from "@coreui/icons";
import "./ItemCount.css"

const ItemCount = ({ stock, onAdd, count, setCount }) => {
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
      alert(`Se agregaron ${count} productos al carrito.`);
    }

    console.log(onAdd);
  };

  return (
    <CContainer style={{ width: "10rem" }}>
      <CRow>
        <CButtonGroup>
          <CButton color="danger"  onClick={handleDecrement} className="btn-ev">
            <CIcon icon={cilMinus} size="sm" />
          </CButton>
          <CContainer>{count}</CContainer>
          <CButton color="success"  onClick={handleIncrement} className="btn-ev">
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
