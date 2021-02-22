import React from "react";
import "./App.css";
import product_list from "./List"
import Products from "./Products"
import Header from './Header'
function App() {
  return (
    <>
      <Header />
      <Products product_list={product_list} />
    </>
  )
}
export default App;
