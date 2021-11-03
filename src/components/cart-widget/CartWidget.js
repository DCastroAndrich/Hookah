import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="icon">
        <FontAwesomeIcon icon={faShoppingBag} />
      </div>
    </Link>
  );
};

export default CartWidget;
