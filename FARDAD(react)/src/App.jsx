import { BrowserRouter, Form, Link, Route, Routes } from "react-router-dom";
import Header from '../components/Header'
import './App.css'
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import Home from "../components/Home";
import Product from "../components/product";

function App() {

  const [UserInf, setInf] = useState({ name: "", phoneNumber: "", email: "" })


  return (
    <>
      <Header UserInf={UserInf} />
      <BrowserRouter>
        <Routes>
        <Route path="" element={<Home UserInf={UserInf} setInf={setInf} />} />
        <Route path="/:id" element={<Product />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
