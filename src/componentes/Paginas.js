import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Inicio from "./Inicio/index";
import Productos from "./Productos/index";
import ProductoDetalles from "./Productos/ProductoDetalles";

const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/Inicio/index.js" element={<Inicio/>} />
        <Route path="/Productos/index.js" element={<Productos/>} />
        <Route path="/producto/:id" element={<ProductoDetalles/>} />
      </Routes>
    </section>
  )
}

export default Paginas
