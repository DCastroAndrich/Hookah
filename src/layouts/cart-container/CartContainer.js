import React, { useContext } from "react";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../context/CartContext";


const CartContainer = () => {
  const { items } = useContext(CartContext);

  return (
    <div style={{'margin-top': '150px'}}>
      <h1>Este es el CartContainer</h1>
      <div>
        {items.length > 0 ? (
          <Cart items={items} />
        ) : (
          <h2>No hay items agregados al Cart</h2>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
