import { BrowserRouter, Form, Link, Route, Routes } from "react-router-dom";
import Header from '../components/Header'
import './App.css'
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import Home from "../components/Home";
import Product from "../components/product";
import ProductList from "../components/ProductList";

function App() {

  const [UserInf, setInf] = useState({ name: "", phoneNumber: "", email: "" })
  const [total , setTotal] = useState(0)
  const [cart, setCart] = useState([])


  




  return (
    <>
      <Header UserInf={UserInf}  total={total} />
      <BrowserRouter>
        <Routes>
        <Route path="" element={<Home UserInf={UserInf} setInf={setInf} URL={URL} />} />
        <Route path="/products/:id" element={<Product UserInf={UserInf} />} />
        <Route path="/products" element={<ProductList cart={cart} setCart={setCart} setTotal={setTotal} />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
