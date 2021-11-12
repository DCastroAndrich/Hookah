import React from "react";
import ItemDetail from "../item-detail/ItemDetail";
import "../../layouts/cart-container/CartContainer.css";
import { CCardGroup } from "@coreui/react";

const Cart = ({ items }) => {
  return (
    <CCardGroup>
      {items.map((currentItem) => {
        const { item } = currentItem;
        return <ItemDetail key={item.id} {...item} count={currentItem.count} />;
      })}
    </CCardGroup>
  );
};

export default Cart;
