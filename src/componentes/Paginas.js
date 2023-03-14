import React from 'react'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Inicio from "./Inicio/index";
import Productos from "./Productos/index";

const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path='./Inicio/index.js' exact component={Inicio} />
        <Route path='./Productos/index.js' exact component={Productos} />
      </Routes>
    </section>
  )
}

export default Paginas
