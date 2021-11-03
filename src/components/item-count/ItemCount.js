import React from "react";
import { CButton, CButtonGroup, CContainer, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMinus, cilPlus } from "@coreui/icons";

const ItemCount = ({ stock, count, setCount }) => {
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

  

  return (
    <CContainer style={{ width: "10rem" }}>
      <CRow>
        <CButtonGroup>
          <CButton color="danger"  onClick={handleDecrement}>
            <CIcon icon={cilMinus} size="sm" />
          </CButton>
          <CContainer>{count}</CContainer>
          <CButton color="success"  onClick={handleIncrement}>
            <CIcon icon={cilPlus} size="sm" />
          </CButton>
        </CButtonGroup>
      </CRow>
      
    </CContainer>
  );
};

export default ItemCount;
