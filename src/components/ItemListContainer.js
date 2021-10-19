import React from 'react'
import ItemCount from './ItemCount'
import './ItemListContainer.css'




function ItemListContainer() {
    return (
        
        <div className="itemListContainer">
            <h3>Bienvenidos</h3>
            <ItemCount stock="10" initial="1"/>
        </div>            
        
    )
}

export default ItemListContainer
