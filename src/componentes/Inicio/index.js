import React from 'react'
import Portada from "../../images/inicio.jpg";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className='inicio'>
      <Link to="./index.js">
        <h1>Inicio</h1>
      </Link>
      <Link to="../Productos/index.js">
        <h1>Productos</h1>
      </Link>
      <img src={Portada} alt="inicio"/>
    </div>
  )
}

export default Inicio
