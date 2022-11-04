import React, { createContext, useState, useEffect } from "react";

export const Context = createContext()

export const CustomProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([0]);
  const [total, setTotal] = useState([0]);

  const addItem = (item,cantidad) => {
    if (IsInCart(item.id)) {
      const modificado = cart.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      });
      setCart(modificado);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
    setQty(qty + cantidad);
    setTotal(total + (item.price * cantidad));
  };


  const deleteItem = (id) => {
    const found = cart.find(producto => producto.id === id);
    setCart(cart.filter((item) => item.id !== id));
    setQty( qty - found.cantidad)
    setTotal(total - (found.price * found.cantidad))
  };

  const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));


  useEffect(() => {
    setQty(cart.reduce((total, item) => total + item.cantidad, 0))
    setTotal(cart.reduce((total, item) => total + (item.cantidad * item.price), 0))
  }, [])
  

  const IsInCart = (id) => {
    return cart.some(item => item.id === id);
    // console.log("se encarga de saber i un poroducto esta en la lista")
  }

  const clear = () => {
    setCart([])
    setQty(0)
    setTotal(0)
    console.log("limpia el carro")
  }

  return <Context.Provider value={{cart, qty, total, addItem, deleteItem, clear, removeProduct}} > {children} </Context.Provider>;
  
}