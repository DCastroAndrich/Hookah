import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css'



function CartWidget() {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={faShoppingBag} />
        </div>

        
    )
}

export default CartWidget