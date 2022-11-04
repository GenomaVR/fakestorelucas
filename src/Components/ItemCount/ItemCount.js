import React, { useState } from "react";
import "../Containers/ItemListContainerMain/Item/item.css"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="boton-sumar">
      <button onClick={subtract}>-</button>
      <p className="cantidadCarro">{count}</p>
      <button onClick={add}>+</button>
      <button className="agregarCarrito" disabled={stock === 0} onClick={()=>onAdd(count)}>
        <p className="nombrecarrito">{stock === 0 ? 'No tenemos stock' : 'Agrega al carrito'}</p>
      </button>
    </div>
  );
  };

export default ItemCount;


