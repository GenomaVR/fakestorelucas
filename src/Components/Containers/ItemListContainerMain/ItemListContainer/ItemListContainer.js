import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "../ItemListContainer/ItemListContainer.css"
import { db } from "../../../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";


export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`


  const productCollection = collection(db, "productos");
  const q = query(productCollection, where('categoria', '==', "men's clothing" ))

  useEffect(() => {
    getDocs(productCollection)
    .then((result) => {
      const listProducts = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProducts(listProducts);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));

  }, [id, URL_BASE, URL_CAT]);
  



/*
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(id ? URL_CAT : URL_BASE);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);

  */

  return (
    <>
    <h1 className="titulo">La pagina numero uno de compras en el exterior!</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList  products={products} />}</>}
    </>
  );
};


