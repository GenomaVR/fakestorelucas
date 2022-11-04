import React from "react";
import { ItemListContainer } from "./Components/Containers/ItemListContainerMain/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar"
import { ItemDetailContainer } from "./Components/Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CustomContext"
import { Cart } from "./Components/Containers/CartView/Cart";


const App = () => {

  const mensaje = "Del mundo a tu casa!";

  return(
  <>
    <CustomProvider >
    <BrowserRouter>
    <Navbar greeting={mensaje} />
    <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/> 
          <Route path="*" element={<ItemListContainer />}/>
    </Routes>
    </BrowserRouter>
    </CustomProvider>
  </>
  )
}

export default App