import React from 'react'
import Item from "../Item/Item"
import "../ItemListContainer/ItemListContainer.css"

const ItemList = ({ products }) => {
    return (
        <div className='div-contenedor'>
            {products.map((product) =>
                <Item  key={product.id} product={product} />
            )}
        </div>
    )
}

export default ItemList