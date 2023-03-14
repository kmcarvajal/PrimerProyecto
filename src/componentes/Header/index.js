import React from 'react'
import Eevee from "../../images/Eevee.jpg";
import carrito from "../../images/carrito.svg";
import { Link } from "react-router-dom";

const Encabezamiento = () => {
  return (
    <header>
        <Link to="../Inicio/index.js">
            <div className="logo">
                <img src={Eevee} alt='logo' width="120"/>
            </div>
        </Link>
        <ul>
            <li>
                <Link to='../Inicio/index.js'>INICIO</Link>
            </li>
            <li>
                <Link to='../Productos/index.js'>PRODUCTOS</Link>
            </li>
        </ul>
        <div className="carrito">
            <img src={carrito} alt='carrito'/>
            <span className='total'>0</span>
        </div>
    </header>
  )
}

export default Encabezamiento
