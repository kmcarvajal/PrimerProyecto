import React, { useContext } from "react";
import Eevee from "../../images/Eevee.jpg";
import carritocompra from "../../images/carrito.svg";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

const Encabezamiento = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carrito] = value.carrito

    const toogleMenu = () => {
        setMenu(!menu);
    }

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
        <div className="carritodecompra" onClick={toogleMenu}>
            <img src={carritocompra} alt='carrito'/>
            <span className='total'>{carrito.length}</span>
        </div>
    </header>
  )
}

export default Encabezamiento
