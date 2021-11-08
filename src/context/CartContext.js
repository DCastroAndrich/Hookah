import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = [], children }) => {
  const [items, setItems] = useState(defaultValue);

  const isInCart = (id) => {
    if (items.find((item) => item.id === id)) {
      return true;
    } else {
      return false;
    }
  };

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) {
      return;
    }
    setItems([...items, currentItem]);
  };

  const removeItem = (id) => {
    const itemRemoved = items.filter(({ item }) => item.id !== id);
    setItems(itemRemoved);
  };

  const clear = () => setItems(defaultValue);

  const totalCount = () => items.reduce((total, item)=> total + item.count, 0 );

  const totalPrice = () =>
    items.reduce((total, item) => total + item.item.price * item.count, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clear, isInCart, totalCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
