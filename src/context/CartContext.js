import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = [], children }) => {
  const [items, setItems] = useState(defaultValue);

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) {
      return;
    }
    setItems([...items, currentItem]);
  };

  const removeItem = (id) => {};

  const clear = () => setItems(defaultValue);

  const isInCart = (id) => {
    return id ? alert("El producto ya se encuentra en el carrito") : addItem()
  };

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )

};
