import React, { useContext } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CAvatar, CBadge } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBasket } from "@coreui/icons";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalCount } = useContext(CartContext);
  return (
    <Link to="/cart">
      <CAvatar>
        <CIcon icon={cilBasket} size="lg" />
        {totalCount() === 0 ? null : (
          <CBadge color="success" position="top-end" shape="rounded-circle">
            {totalCount()}
          </CBadge>
        )}
      </CAvatar>
    </Link>
  );
};

export default CartWidget;
