import React from 'react'
import ItemDetail from '../item-detail/ItemDetail';
import "../../layouts/cart-container/CartContainer.css";


const Cart = ({items}) => {
    return (
        <div className="cartContainer">
            {items.map((currentItem) => {
                const {item} = currentItem;
                console.log("item", item);
                return <ItemDetail key={item.id} {...item} count={currentItem.count} />
            } )}
            
        </div>
    )
}

export default Cart
