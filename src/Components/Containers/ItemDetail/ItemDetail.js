import React, { useContext, useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "../ItemListContainerMain/Item/item.css"
import { Context } from "../../../Context/CustomContext";

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { cart, addItem, IsInCart} = useContext(Context);

 
  let stock = 0;
  if(IsInCart){
    const found = cart.find(item => item.id === product.id);
    stock = product.stock - found.cantidad;
  }else{
    stock = product.stock;
  }

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(product, count);
  };


  return (
    <div className="div-main">
      <img className="product-img" alt={product.title} src={product.image} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <div className="precio-boton">
      <h2>Precio:{product.price}$</h2>
      {!isPressedButton ? ( 
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      ) : (
        <Link to={"/cart"}>
          <button className="finalizarCompra">Finalizar compra</button>
        </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
