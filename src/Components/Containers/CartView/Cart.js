import React, { useContext } from "react";
import { Context } from "../../../Context/CustomContext";
import { Link } from "react-router-dom";
import { db } from "../../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import "../CartView/Cart.css"

export const Cart = ({ producto }) => {
  const { cart, total, clear, removeProduct  } = useContext(Context);

  const comprador = {
    nombre: 'Lucas',
    apellido: 'Tomas',
    email: 'lucas@tomas.com'
  };

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection,{
      comprador,
      items:cart,
      total: 200,
      date:serverTimestamp()
    })
    .then(result=>{
      console.log(result.id);
    })
    .catch(e => {
      console.log('todo mal');
      console.log(e);
    });
    
    clear();
  }

  const actualizarStock = ()=>{
    const updateStock = doc(db, "productos","men's clothing")
    updateDoc(updateStock,{stock:100})
  }


  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          <h2>Gracias por tu visita</h2>
        </>
      ) : (
        <div className="div-cart">
        <>

        {cart.map((producto) => (
            <img className="cart-img" src={producto.image} alt={producto.description} />
          ))}
    
          <>
          {cart.map((producto) => (
            <h1 className="producto-nombre" key={producto.id}>{producto.title}</h1>
          ))}
          </>
          <>
          {cart.map((producto) => (
            <h2 className="producto-precio" key={producto.id}>{producto.price}$</h2>
          ))}
          </>
          <>
          <button className="boton-cart-finalizar" onClick={actualizarStock}>finalizar compra</button>
          </>
         
        </>
        </div>
      )}
    </>
  );
};