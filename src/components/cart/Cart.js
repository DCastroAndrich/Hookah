import React from 'react'
import ItemDetail from '../item-detail/ItemDetail';
import "../../layouts/cart-container/CartContainer.css";
import { CCardGroup } from '@coreui/react';


const Cart = ({items}) => {
    return (
        <CCardGroup className="cartContainer">
            {items.map((currentItem) => {
                const {item} = currentItem;
                console.log("item", item);
                return <ItemDetail key={item.id} {...item} count={currentItem.count} />
            } )}
            
        </CCardGroup>
    )
}

export default Cart
