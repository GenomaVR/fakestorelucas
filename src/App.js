import React from "react";
import { ItemListContainer } from "./Components/Containers/ItemListContainerMain/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar"
import { ItemDetailContainer } from "./Components/Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  const mensaje = "Del mundo a tu casa!";

  return(
  <>
    <BrowserRouter>
    <Navbar greeting={mensaje} />  
    <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          
          <Route path="*" element={<ItemListContainer />}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App